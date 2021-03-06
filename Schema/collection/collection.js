const mongoose = require('mongoose');
const ParfumeSchema = require('../perfume/perfume')

module.exports =  new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Author name should be provided']
    },
    Parfume: [ParfumeSchema],
    img: {
      type:String
    },
    hederImg:{
      type:String
    },
    vidourl:{
      type:String
    },
    stickyimg:{
      type:String
    }
  });