const mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports = new mongoose.Schema({
    product:[{
        type: Schema.Types.ObjectId,
        ref:'perfume'
    }],
    // qty:{
    //     type:Number,
    //     default:1,
    // },
  });