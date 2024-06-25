const express = require("express");
const router = express.Router();
const todoSchema = require("../models/todoSchema.js");
router.get("/", async (req, res) => {
  const data = await todoSchema.find({});
  res.json(data);
});
function f1(req, res, next) {
  console.log("f1 middleware called");
  next();
}
router.get("/:id", f1, async (req, res) => {
  const data = await todoSchema.find({ _id: req.params.id });
  res.status(200).json(data);
});
router.post("/", async (req, res) => {
  const body = req.body;
  const data = await todoSchema.create({
    title: body.title,
    description: body.description,
  });
  res.status(200).json(data);
});
router.put("/:id", async (req, res) => {
  const body = req.body;
  const update = await todoSchema.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: body.title,
        description: body.description,
      },
    }
  );
  res.status(200).json(update);
});
router.delete("/:id", async (req, res) => {
  const del = await todoSchema.deleteOne({
    _id: req.params.id,
  });
  res.status(200).json(del);
});

module.exports = router;
