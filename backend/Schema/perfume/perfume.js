const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name:{
      type: String,
      required: [true, 'perfume name should be provided']
    },
    image: {
      type: String,
      required: [true, 'perfume image should be provided']
    },
    price: Number,
    description: {
      type: String,
      required: [true, 'perfume description should be provided']
    },
  });