require("dotenv").config();

const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors")
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3002;

const URL = process.env.MONGO_URL;

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");




main()
  .then(() => {
    console.log("connection Successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
}

// app.set("view engine", "ejs");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname, "views"));
app.get('/', function(req, res) {
    res.send("welcome");
});

app.get('/allHoldings',async function(req, res) {

  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings)
    // res.send("welcome");
});
app.get('/allPositions',async function(req, res) {

  let allPositions = await PositionsModel.find({});
  res.json(allPositions)
    // res.send("welcome");
});
app.post('/newOrder',async function(req, res) {

  let newOrder = new OrdersModel({  
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode});
  newOrder.save();
  res.send("order Saved")

});
app.listen(PORT);