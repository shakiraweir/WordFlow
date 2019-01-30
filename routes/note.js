const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note.js')

//list out all notes
router.get("/", noteController.index);
// add a new note and return a list of notes
// router.post("/", noteController.create);
// update a note and return a list of notes
// router.put("/", noteController.create);
// // delete a note and return a list of notes
// router.delete("/", noteController.create);
router.get("/new", noteController.new)
module.exports = router;