// const express = require('express')
// const router = express.Router()

// // router.get("/new", (req, res) => {
// //     res.send("hello, my name is Shakira")
// //   });

// //render a form to create a new user
// router.get("/new", (req, res) => {
//     res.render("user/new")
//   }); 

// module.exports = router


module.exports = {
    // show: (req, res) => {
    //   res.render("index", { page: "user show page" });
    // },
    // new: (req, res) => {
    //   res.render("user/login");
    // },
    signin: (req, res) => {
        res.render("signin");
      },
    signup: (req, res) => {
        res.render("signup");
      }
    create: (req, res) => {
        User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        }).then(user => {
          res.redirect(`/user/${user._id}`);
        });
    // login: (req, res) => {
    //   res.render("user/login");
    // }
    // create: (req, res) => {
    //   user.create({
    //     email: req.body.email,
    //     password: req.body.password
    //   }).then(user => {
    //     res.redirect(`/user/${user._id}`);
    //   });
    // }
    // destroy: (req, res) => {
    //   res.render('', { })
    // },
    // update: (req, res) => {
    //   res.render('', { })
  };