// backend/init/initHoldings.js

require("dotenv").config({ path: "../.env" });  // Load .env from backend folder
// console.log("dotenv config:", require('dotenv').config({ path: "../.env" }));
// console.log("process.env.MONGO_URL:", process.env.MONGO_URL);
const mongoose = require("mongoose");
const { HoldingsModel } = require("../model/HoldingsModel");  // Adjust if your model path differs

const MONGO_URI = process.env.MONGO_URL;

// console.log("Loaded MONGO_URL:", MONGO_URI);

const initialHoldings = [
  {
    name: "INFY",
    qty: 10,
    avg: 1450.5,
    price: 1500.0,
    net: "+495.00",
    day: "+1.5%",
  },
  {
    name: "TCS",
    qty: 5,
    avg: 3400.0,
    price: 3550.0,
    net: "+750.00",
    day: "+2.3%",
  },
  {
    name: "HDFC",
    qty: 8,
    avg: 2700.0,
    price: 2650.0,
    net: "-400.00",
    day: "-1.1%",
  },
  {
    name: "WIPRO",
    qty: 12,
    avg: 400.25,
    price: 420.0,
    net: "+237.00",
    day: "+1.8%",
  },
  {
    name: "RELIANCE",
    qty: 7,
    avg: 2300.0,
    price: 2250.0,
    net: "-350.00",
    day: "-2.0%",
  },
  {
    name: "ICICI",
    qty: 15,
    avg: 850.0,
    price: 870.0,
    net: "+300.00",
    day: "+0.9%",
  },
  {
    name: "SBIN",
    qty: 20,
    avg: 620.0,
    price: 615.0,
    net: "-100.00",
    day: "-0.8%",
  },
];

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected.");

    // Clear existing holdings
    await HoldingsModel.deleteMany({});
    console.log("Old holdings cleared.");

    // Insert initial holdings
    await HoldingsModel.insertMany(initialHoldings);
    console.log("Initial holdings data inserted.");

    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });