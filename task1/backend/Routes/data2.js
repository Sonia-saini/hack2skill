const express = require("express");
const fs = require("fs");
const { Data2Model } = require("../models/model2");
const data2Router = express.Router();
data2Router.post("/data2users", async (req, res) => {
  try {
    const jsonData = fs.readFileSync("mock-data-2.json", "utf8");
    const data = JSON.parse(jsonData);
    let dat = await Data2Model.insertMany(data);

    res.status(200).send("data2 users successfully posted");
  } catch (err) {
    res.status(400).send("post request have some error");
  }
});
module.exports={
    data2Router}
