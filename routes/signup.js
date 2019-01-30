const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get("/", userController.signup);

module.exports = router;