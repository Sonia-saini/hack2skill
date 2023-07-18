const express = require("express");
const { Data1Model } = require("../models/model1");
const { Data2Model } = require("../models/model2");
const searchRouter = express.Router();
searchRouter.get("/search", async (req, res) => {
  const {query}=req.query;
    try {
        query=query.trim()
        const regex = new RegExp(query,"i")
        console.log(query,regex)
        // let data1=await Data1Model.find({$or:[{email:{$regex:regex}},{full_name:regex},{number:query.trim()}]});
let data=await Data1Model.findOne({number:query})
res.status(400).send(data)
    } catch (err) {
      res.status(400).send("getting have some error");
    }
  });
  module.exports={
    searchRouter}
