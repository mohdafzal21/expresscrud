var express=require('express');
var router=express.Router();
// var path=require('path');
// var User=require('../models/signup');
// var User=db.Signup;
// var bcrypt = require('bcryptjs');
// const passport=require('passport');
// const localPassport=require('passport-local').Strategy;
// // for multer
// const multer=require('multer');
//
// // multer.diskStorage({getFilename})
//
// //storage for multer engine
// var storage = multer.diskStorage({
//     destination : function (req, file, cb) {
//         cb(null, 'public/uploads/')
//     },
//     Filename : function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now()+ '.jpg')
//     }
// });
//
//
// //putting into uploads file
// var uploads = multer({ storage: storage}).single('img');
//
//
// router.get('/',function(req,res){
//     res.render('browser');
// });
//
// //get signup page
// router.get('/signup',function(req,res){
//     res.render('signup');
// });
//
// // signup post
// router.post('/signup', function(req, res, next) {
//     console.log('registering user');
//     User.register(new User({username: req.body.username}), req.body.password, function(err) {
//         if (err) {
//             console.log('error while user register!', err);
//             return next(err);
//         }
//
//         console.log('user registered!');
//
//         res.redirect('/');
//     });
// });
//
// //get login page
// router.get('/login',function(req,res){
//     res.render('login');
// });
//
// //post method for login using passport
// router.post('/login',passport.authenticate('local'),function(req,res)
// {
//    res.redirect('/home');
// });
//
// //logout
// router.post('/logout',function(req,res){
//     req.logout();
//     res.redirect('/')
// });
//
// //getting home page after login
// router.get('/home',function(req,res){
//     res.render('home');
// });
//
//
// //geting an upload file after coming to home page
// router.get('/upload',function(req,res){
//     res.render('upload');
// });
//
// //post method for uploads
// // router.post('/uploads',function(req,res)
// // {
// //     uploads(req,res,function(err)
// //     {
// //        if(err)
// //        {
// //            res.render('upload',{msg:err});
// //        }
// //        else
// //        {
// //            console.log(req.file);
// //            res.send('test');
// //        }
// //     });
// // });
//
//
//
// router.post('/upload', function (req, res) {
//     uploads(req, res, function (err) {
//         if (err) {
//             console.log(err);
//             res.render('upload',{msg:err});
//         }
//
//         console.log(req.file);
//         // res.send('done');
//         file: `uploads/${req.file}`
//     })
// })
//


module.exports=router;