const express = require('express');
const router = express.Router();
const db = require('../models');

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



module.exports = router;

