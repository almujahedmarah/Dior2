const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../Schema/user");
const User = mongoose.model("user",userSchema);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require("express");
const CartSchema = require("../Schema/Cart")
const Cart = mongoose.model("Cart",CartSchema)



router.get("/", async (req, res) => {
    res.send((await User.find({})));
  });


  router.patch("/:id", async (req, res) => {
    res.send( await  User.findByIdAndUpdate(req.params.id,{...req.body})) 
  });
//-=========================CART===========================================================
router.post("/cart/:Uid", async (req, res)=>{
     await  User.findById(req.params.Uid)
     .then((user)=>{
         console.log(user.Cart)
         if(user.Cart == undefined){
        Cart.create({product:req.body.product,qty:req.body.qty})
        .then(async(cart)=>{
         await User.findByIdAndUpdate(req.params.Uid, {Cart:cart})
          await user.save()
          res.send(user)
        })
        }else{
            Cart.findByIdAndUpdate(user.Cart,{$push:{product:req.body.product},qty:req.body.qty})
            .then(async(cart)=>{
             await User.findByIdAndUpdate(req.params.Uid, {Cart:cart})
              await user.save()
              res.send(user)
            })
        }
     })
})

router.get("/cart/:Uid", async (req, res)=>{
    await  User.findById(req.params.Uid).populate('cart')
    .then((user)=>{
        console.log(user.cart)
        if(user.cart == undefined){
       
         res.send("u dont have a cart")
       
       }else{
           
             res.send(user.cart)
       }
    })
})


//==========login======================================================================


  router.post('/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, dbUser) => {
        if (!dbUser) {
            return res.status(404).json({message: "User not found"});
        } else {
            // password hash
            bcrypt.compare(req.body.password, dbUser.password, (err, compareRes) => {
                if (err) { // error while comparing
                    res.status(502).json({message: "error while checking user password"});
                } else if (compareRes) { // password match
                    const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
                    res.status(200).json({message: "user logged in", "token": token, "id": dbUser._id, "name": dbUser.name});
                } else { // password doesnt match
                    res.status(401).json({message: "invalid credentials"});
                };
            });
        };
      }); 
  }
  );

//================signup==========================================================================
  
router.post('/signup', (req, res) => {
        // checks if email already exists
        User.findOne({email: req.body.email}, (err, dbUser)=>{
            if (dbUser) {
                return res.status(409).json({message: "email already exists"});
            } else if (req.body.email && req.body.password) {
                // password hash
                bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
                    if (err) {
                        return res.status(500).json({message: "couldnt hash the password"}); 
                    } else if (passwordHash) {
                        return User.create(({...req.body,
                            password: passwordHash
                        }))
                        .then(() => {
                            res.status(200).json({message: "user created"});
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(502).json({message: "error while creating the user"});
                        });
                    };
                });
            } else if (!req.body.password) {
                return res.status(400).json({message: "password not provided"});
            } else if (!req.body.email) {
                return res.status(400).json({message: "email not provided"});
            };
        })
      });

  module.exports = router;