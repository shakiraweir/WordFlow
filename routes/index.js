const express = require('express')
const router = express.Router()

router.use('/', require('./application.js'));
router.use('/signin', require('./signin.js'));
router.use('/signup', require('./signup.js'));
router.use('/prompt', require('./prompt.js'));
router.use('/notes', require('./note.js'));

// router.use('/signup', require('./user.js'));
// router.use('/question', require('./question.js'));







router.all('*', (req, res) => {
    res.status(400).send();
});

module.exports = router;