const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/user_db') //need to create Database name
mongoose.Promise = Promise;
module.exports = mongoose;