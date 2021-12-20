const mongoose = require('mongoose');
var Schema = mongoose.Schema

module.exports = new mongoose.Schema({


        carts: { },
      
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
  });