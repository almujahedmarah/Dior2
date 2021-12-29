const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const collectionSchema = require("../Schema/collection/collection");
const collection = mongoose.model("collection", collectionSchema);
const perfumeSchema = require("../Schema/perfume/perfume");
const perfume = mongoose.model("perfume", perfumeSchema);

router.get("/collection", async (req, res) => {
  res.send(await collection.find({}));
});

router.get("/collection/:id", async (req, res) => {
  res.send(await collection.findById(req.params.id));
});

router.get("/Parfume/:CId/:PId", async (req, res) => {
  res.send(
    await collection
      .findById(req.params.CId)
      .select({ Parfume: { $elemMatch: { _id: req.params.PId } } })
  );
});

module.exports = router;