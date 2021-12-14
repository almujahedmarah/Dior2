const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AdminSchema = require("../Schema/admin");
const Admin = mongoose.model("Admin",AdminSchema);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.get("/", async (req, res) => {
    res.send((await Admin.find({})));
  });

  router.patch("/:id", async (req, res) => {
    res.send( await  Admin.findByIdAndUpdate(req.params.id,{...req.body})) 
  });

//=============== collection=================================================================================

const collectionSchema = require("../Schema/collection/collection");
const collection = mongoose.model('collection', collectionSchema);



router.get("/collection", async (req, res) => {
    res.send((await collection.find({})));
  });

  router.get("/collection/:id", async (req, res) => {
    res.send((await collection.findById(req.params.id)));
  });

router.delete("/collection/:id", async (req, res) => {
    res.send( await collection.findByIdAndDelete(req.params.id))
  });

  router.post("/collection", async (req, res) => {
    res.send( await collection.create(req.body))
  });

  router.patch("/collection/:id", async (req, res) => {
    res.send( await  collection.findByIdAndUpdate(req.params.id,{...req.body})) 
  });

//====================perfume ==========================================================================


const perfumeSchema = require("../Schema/perfume/perfume");
const perfume = mongoose.model('perfume', perfumeSchema);



router.get("/Parfume/:CId/:PId", async (req, res) => {

  const allProduct = await collection.findById(req.params.CId).select({  Parfume: {$elemMatch: {_id: req.params.PId}}})
  res.send({allProduct:allProduct, collectionId:req.params.CId} );

})

//-----------------------------------------------------------------------------------------------------------------------

router.delete("/Parfume/:CId/:PId", async (req, res) =>{
  const perfumeId = req.params.PId;
  try {
    const Coll= await collection.findById(req.params.CId);
    if (!Coll){
      return res.status(404).send();
    }
    await Coll.Parfume.pull({_id: perfumeId})
    await Coll.save()
    return res.status(201).send();
  }
catch(e){
  return res.status(500).send();
}
})

//------------------------------------------------------------------------------------------------------------------------

router.patch("/Parfume/:CId/:PId", async (req, res) => {
  collection.update(
    {"Parfume._id": req.params.PId},
    {
      // set she who update the data 
      $set:{
        "Parfume.$.name":req.body.name,
        "Parfume.$.image":req.body.image,
        "Parfume.$.price":req.body.price,
        "Parfume.$.description":req.body.description,
      },
    },
    function (err, model){
      if (err){
        console.log(err);
        return res.send(err);
      }
    }
  )
  const Coll = await collection.findById(req.params.CId);
  res.status(201).send(Coll);
});

//--------------------------------------------------------------------------------------------------------------------------

router.post("/Parfume/:CId", async (req, res) => {
  const _id = req.params.CId;
  const Coll = await collection.findOne({ _id });
  const newParfume = new perfume({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
  });
  Coll.Parfume.push(newParfume);
  console.log(Coll);
  try{
    await Coll.save()
    return res.status(201).send(Coll);
  }
  catch(e){
    return res.status(500).send();
  }
  console.log("Added");
});




//=========>login

  router.post('/login', (req, res) => {
    Admin.findOne({email: req.body.email}, (err, dbUser) => {
        if (!dbUser) {
            return res.status(404).json({message: "user not found"});
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

  //=========>signup

//   router.post('/signup', (req, res) => {
//     // checks if email already exists
//     Admin.findOne({email: req.body.email}, (err, dbUser)=>{
//         if (dbUser) {
//             return res.status(409).json({message: "email already exists"});
//         } else if (req.body.email && req.body.password) {
//             // password hash
//             bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
//                 if (err) {
//                     return res.status(500).json({message: "couldnt hash the password"}); 
//                 } else if (passwordHash) {
//                     return Admin.create(({...req.body,
//                         password: passwordHash
//                     }))
//                     .then(() => {
//                         res.status(200).json({message: "user created"});
//                     })
//                     .catch(err => {
//                         console.log(err);
//                         res.status(502).json({message: "error while creating the user"});
//                     });
//                 };
//             });
//         } else if (!req.body.password) {
//             return res.status(400).json({message: "password not provided"});
//         } else if (!req.body.email) {
//             return res.status(400).json({message: "email not provided"});
//         };
//     })
//   });
  
  module.exports = router;