const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get("/", userController.signin);

module.exports = router;