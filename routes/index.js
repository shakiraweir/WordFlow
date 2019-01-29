const express = require('express')
const router = express.Router()

router.use('/', require('./application.js'));
router.use('/user', require('./user.js'));
// router.use('/question', require('./question.js'));







router.all('*', (req, res) => {
    res.status(400).send();
});

module.exports = router;