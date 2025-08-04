require("dotenv").config();

const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;
main()
  .then(() => {
    console.log("connection Successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
}

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname, "views"));
app.get('/', function(req, res) {
    res.send("welcome");
});
app.listen(PORT);