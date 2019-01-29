//load all dependencies
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const hbs = require('hbs')
const mongoose = require('mongoose')
const applicationController = require("./controllers/application")
mongoose.Promise = Promise



app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/', applicationController);
app.use(require('./routes/index.js'))


app.listen(3000, () => {
    console.log("app listening on port 3000");
  });

  //make the express app accessible for use in other files
//   module.exports = app