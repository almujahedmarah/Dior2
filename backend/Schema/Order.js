const mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports = new mongoose.Schema({


        carts: {
          type: Schema.Types.ObjectId,
          ref: "Cart",
        },
      
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
  });