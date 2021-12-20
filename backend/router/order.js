const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../Schema/user");
const User = mongoose.model("user",userSchema);
const express = require("express");
const CartSchema = require("../Schema/Cart")
const Cart = mongoose.model("Cart",CartSchema)
const OrderSchema =require("../Schema/Order")
const Order= mongoose.model("Order", OrderSchema)
const collectionSchema = require("../Schema/collection/collection");
const collection = mongoose.model('collection', collectionSchema);

//==========================================================================================================

router.post("/get", (req, res)=>{
  console.log(req.body)
  Order.find({ userId: req.body.userId }).then((allOrder)=>{
    res.send(allOrder)
  })

})


//==========================================================================================================
router.post("/",(req, res) =>{
  let arr = []
    User.findById({ _id: req.body.userId })
    .then((user) => {
      Cart.find({ _id: user.cart })
        .populate("product.items")
        .then((cart) => {
          console.log("cart", arr);
          Order.create({
            carts: req.body.cart,
            userId: user,
          }).then((order) => {
            User.findByIdAndUpdate( 
              { _id: req.body.userId },
              { $unset: { cart: cart } }
            ).then(async (user) => {
              await order.save();
              await user.save();
              await res.send(order);
            });
          });
        });
})
.catch((error) => {
    res.json({ error: error });
  });
})

// let arr = []

// await  User.findById(req.body.userId).populate('cart')
// .then(async(user)=>{
// collection.find({}).populate("Parfume").populate("Parfume.name").exec(function(err,product){
//   product.forEach((Pro)=>{

//       user.cart.product.forEach(async (cartPro)=>{
       

//         const products =  Pro.Parfume.find(o => { 
//           return o._id.toString() === cartPro.items.toString()})
//          if(products !== undefined){
//           //  console.log("products")
//            arr.push(products)
//             console.log(arr) 
//          }
          
//        })
        
//    })
//    res.send({products:arr})
// })

// })
module.exports = router;