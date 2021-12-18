const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../Schema/user");
const User = mongoose.model("user",userSchema);
const express = require("express");
const CartSchema = require("../Schema/Cart")
const Cart = mongoose.model("Cart",CartSchema)
const OrderSchema =require("../Schema/Order")
const Order= mongoose.model("Order", OrderSchema)


router.post("/",(req, res) =>{
    User.findById({ _id: req.body.userId })
    .then((user) => {
      Cart.find({ _id: user.cart })
        .populate("product.items")
        .then((cart) => {
          console.log("cart", cart);
          Order.create({
            carts: cart[0],
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


module.exports = router;