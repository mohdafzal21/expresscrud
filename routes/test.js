const express = require('express');
const router = express.Router();
const db = require('../models');

//
//
//
//
// router.get('/', function(req,res){
//     db.Restaurant.find(function (err,data) {
//         if(err){
//             console.log(err);
//         }else{
//             res.render('home',{data:data});
//         }
//     })
//
// });
//
// // new page
// router.get("/form", function(req, res){
//     res.render("form");
// });
//
// router.post('/', function(req,res){
//     db.Restaurant.create(req.body)
//         .then(function(){
//             res.redirect('/restaurants')
//         })
//         .catch(function(err){
//             res.render('form')
//         })
// });
// // find Byid
//
//
// router.get('/:id', function(req,res){
//     var id = req.params.id;
//     console.log(id);
//     db.Restaurant.findById(req.params.id)
//         .then(function(err,restaurants){
//             res.render('show', {data: restaurants});
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// });
//
// // update route
// router.put('/:id' ,function(req,res){
//
//     db.Restaurant.findByIdAndUpdate({_id: req.params.id}, req.body)
//         .then(function(restaurant){
//             res.json(restaurant);
//         })
//         .catch(function(err){
//             res.send(err)
//         })
//
// });
// // delete
// router.delete('/:id', function(req,res){
//     db.Restaurant.remove({_id : req.params.id})
//         .then(function(){
//             res.send("deleted");
//         })
//         .catch(function(err){
//             res.send(err)
//         })
//
// });
//
//

module.exports = router;

