const mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports = new mongoose.Schema({

    product: [
        {
          items: { type: Schema.Types.ObjectId, ref: "perfume" },
          subtotal: Number,
          quantity: Number,
        },
      ],
    
      total: {
        type: Number,
      },
  });