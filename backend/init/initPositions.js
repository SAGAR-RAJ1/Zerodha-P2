// backend/init/initPositions.js

require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const { PositionsModel } = require("../model/PositionsModel"); // Adjust path if needed

const MONGO_URI = process.env.MONGO_URL;

const initialPositions = [
  {
    product: "MIS",
    name: "INFY",
    qty: 10,
    avg: 1450.5,
    price: 1500.0,
    net: "+495.00",
    day: "+1.5%",
    isLoss: false,
  },
  {
    product: "NRML",
    name: "TCS",
    qty: 5,
    avg: 3400.0,
    price: 3550.0,
    net: "+750.00",
    day: "+2.3%",
    isLoss: false,
  },
  {
    product: "CNC",
    name: "HDFC",
    qty: 8,
    avg: 2700.0,
    price: 2650.0,
    net: "-400.00",
    day: "-1.1%",
    isLoss: true,
  },
  {
    product: "MIS",
    name: "WIPRO",
    qty: 12,
    avg: 400.25,
    price: 420.0,
    net: "+237.00",
    day: "+1.8%",
    isLoss: false,
  },
  {
    product: "NRML",
    name: "RELIANCE",
    qty: 7,
    avg: 2300.0,
    price: 2250.0,
    net: "-350.00",
    day: "-2.0%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "ICICI",
    qty: 15,
    avg: 850.0,
    price: 870.0,
    net: "+300.00",
    day: "+0.9%",
    isLoss: false,
  },
  {
    product: "MIS",
    name: "SBIN",
    qty: 20,
    avg: 620.0,
    price: 615.0,
    net: "-100.00",
    day: "-0.8%",
    isLoss: true,
  },
];

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected.");

    // Clear existing positions
    await PositionsModel.deleteMany({});
    console.log("Old positions cleared.");

    // Insert initial positions
    await PositionsModel.insertMany(initialPositions);
    console.log("Initial positions data inserted.");

    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

