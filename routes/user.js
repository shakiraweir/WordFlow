const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get("/new", userController.new);

// router.get("/login", userController.login);


module.exports = router;