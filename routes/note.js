const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note.js')

router.get("/", noteController.index);

module.exports = router;