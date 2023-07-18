const express = require("express");
const fs = require("fs");
const { Data1Model } = require("../models/model1");
const data1Router = express.Router();
data1Router.post("/data1users", async (req, res) => {
  try {
    const jsonData = fs.readFileSync("mock-data-1.json", "utf8");
    const data = JSON.parse(jsonData);
    let dat = await Data1Model.insertMany(data);

    res.status(200).send("data 1 users successfully posted");
  } catch (err) {
    res.status(400).send("post request have some error");
  }
});
module.exports={
    data1Router}
