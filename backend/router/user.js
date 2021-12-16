const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../Schema/user");
const User = mongoose.model("user",userSchema);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require("express");
const CartSchema = require("../Schema/Cart")
const Cart = mongoose.model("Cart",CartSchema)
const ParfumeSchema = require("../Schema/perfume/perfume")
const Perfume = mongoose.model("Perfume",ParfumeSchema)
const collectionSchema = require("../Schema/collection/collection");
const collection = mongoose.model('collection', collectionSchema);


router.get("/", async (req, res) => {
    res.send((await User.find({})));
  });


  router.patch("/:id", async (req, res) => {
    res.send( await  User.findByIdAndUpdate(req.params.id,{...req.body})) 
  });
//-=========================CART===========================================================
// router.post("/cart/:Uid", async (req, res)=>{
//      await  User.findById(req.params.Uid)
//      .then((user)=>{
//          console.log(user.cart)
//          if(user.cart == undefined){
//         Cart.create({product:req.body.product})
//         .then(async(cart)=>{
//          await User.findByIdAndUpdate(req.params.Uid, {cart:cart}).then(async(newUser)=>{
//              await user.save()
//              res.send(newUser)
//          })
//         })
//         }else{
//             Cart.findByIdAndUpdate(user.cart,{$push:{product:req.body.product}})
//             .then(async(cart)=>{
//              await User.findByIdAndUpdate(req.params.Uid, {cart:cart})
//               await user.save()
//               res.send(user)
//             })
//         }
//      })
// })

 router.post("/cart/:Uid/:CId/:PId", async (req, res)=>{

let product = await collection.findById(req.params.CId).select({  Parfume: {$elemMatch: {_id: req.params.PId}}});
console.log(product)
User.findById({ _id: req.params.Uid }).then((user) => {
  if (user.cart == undefined) {
    Cart.create({
        product:{
        items: req.params.PId,
        subtotal: product.Parfume[0].price * req.body.quantity,
        quantity: req.body.quantity,
      },
      total: product.Parfume[0].price * req.body.quantity,
    }).then((cart) => {
      User.findByIdAndUpdate( req.params.Uid, {
        cart: cart,
      }).then(async (user) => {
        await user.save();
        res.send(user);
      });
    });
  } else {
    console.log("cart " + user.cart);
    User.findById({ _id: req.params.Uid })
      .populate("cart")
      .then((openCart) => {
        console.log(openCart);
        let item = openCart.cart.product.find(
          (it) => it.items == req.params.PId
        );
        if (openCart.cart.product.includes(item)) {
          console.log("includes");

          let cartId = user.cart;
          let cartQuantity = {
            cart: {
              items: req.params.PId,
              subtotal: product.Parfume[0].price * (item.quantity + req.body.quantity),
              quantity: item.quantity + req.body.quantity,
            },
            total: openCart.cart.total +product.Parfume[0].price* req.body.quantity,
          };
          Cart.findByIdAndUpdate(cartId, { $set: cartQuantity })
            .then((user) => {
              res.json({ message: "Cart information has been updated" });
            })
            .catch((error) => {
              res.json({ error: erorr });
            });
        } else {
          console.log("not includes");


          Cart.findByIdAndUpdate(user.cart, {
            $push: {
              cart: {
                items: req.params.PId,
                subtotal: product.Parfume[0].price* req.body.quantity,
                quantity: req.body.quantity,
              },
            },
            total: openCart.cart.total + product.Parfume[0].price* req.body.quantity,
          }).then((cart) => {
            User.findByIdAndUpdate(req.params.Uid, {
              cart: cart,
            }).then(async (user) => {
              await user.save();
              res.send(user);
            });
          });
        }
      });
  }
});
 })

router.get("/cart/:Uid", async (req, res)=>{
   let arr = []
  
    await  User.findById(req.params.Uid).populate('cart')
    .then(async(user)=>{
      


        if(user.cart == undefined){
       
         res.send("u dont have a cart")
       
       }else{
       
        collection.find({}).populate("Parfume").populate("Parfume.name").exec(function(err,product){
            product.forEach((Pro)=>{
                
                user.cart.product.forEach(async (cartPro)=>{
                
                  const products =  Pro.Parfume.find(o => {return o._id.toString() == cartPro._id.toString()})
                //    console.log(products)
                   if(products !== undefined){
                    // console.log(products)
                     arr.push(products)
                    //  console.log(arr) 
                   }
                    
                 })
                  
             })
             res.send(arr)
        })
        

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