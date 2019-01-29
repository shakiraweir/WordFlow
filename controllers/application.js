// const express = require('express')
// //instantiate an instance of an express router on this file because this is where all routes will be held
// const router = express.Router()
// const userController = require('../controllers/user.js')


// router.get("/", (req, res) => {
//     res.send("hello world my name is Shakira")
//   });

//   module.exports = router

  module.exports = {
    index: (req, res) => {
      res.render("index", { page: "homepage" });
    }
  };