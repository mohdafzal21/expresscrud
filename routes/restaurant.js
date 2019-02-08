const express = require('express');
const router = express.Router();
  const  passport              = require("passport");
   const bodyParser            = require("body-parser");
   const LocalStrategy         = require("passport-local");
    const passportLocalMongoose = require("passport-local-mongoose");
const db = require('../models');

// register
router.get('/register', (req,res)=>{
    res.render(register)
});

//login
router.get('/login', function(req,res){
    res.render(login)
});

// handling user signup
router.post("/register", function(req, res){

    db.User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/restaurants");
        });
    });
});
//login logic
//middleware
router.post("/login",passport.authenticate("local",
    { successRedirect: '/secret',
        failureRedirect: '/login',
    }) ,
    function(req, res){
    });

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/restaurants");
});


//////////////////////////

router.get('/form', function(req,res){
   // show user form to create a new restaurant
   res.render('newRestaurant');
});

router.get('/', function(req,res){
    db.Restaurant.find()
        .then(function(restaurant){
            res.render('list', {restaurant: restaurant});
        })
        .catch(function(err){
            console.log(err);
        })

});

router.get('/list', function(req,res){
    db.Restaurant.find()
        .then(function(restaurant){
            res.json( restaurant);
        })
        .catch(function(err){
            console.log(err);
        })

});




router.post('/', function(req,res){
    db.Restaurant.create(req.body)
         .then(function(newRestaurant){
             res.redirect('/restaurants')
         })
         .catch(function(err){
             res.send(err)
         })
});
// find Byid


router.get('/:id', function(req,res){
    var id = req.params.id;
    console.log(id);
    db.Restaurant.findById(id)
        .then(function(restaurant){
            res.render('show',{restaurant:restaurant});
        })
        .catch(function(err){
            res.send(err)
        })
});

//edit page
router.get('/:id/edit', function(req,res){
    db.Restaurant.findById(req.params.id)
        .then(function(restaurant){
            res.render('edit',{restaurant: restaurant})
        })
        .catch(function (err) {
            console.log(err)
            })

});



// update route
router.put('/:id' ,function(req,res){
    db.Restaurant.findByIdAndUpdate({_id: req.params.id}, req.body.restaurant)
        .then(function(restaurant){
            res.redirect('/restaurants/'+ restaurant._id);
        })
        .catch(function(err){
            res.send(err)
        })

});
// delete

router.delete('/:id', function(req,res){
    db.Restaurant.remove({_id: req.params.id})
        .then(function(){
            res.redirect("/restaurants");
            })
        .catch(function(err){
            res.send(err)
        });

});


exports.isLoggedIn =
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/login");
    }



module.exports = router;

