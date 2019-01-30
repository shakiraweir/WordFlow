const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/wordflow')
mongoose.Promise = Promise;
module.exports = mongoose;