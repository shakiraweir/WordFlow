const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    email: String,
    password: String,
    notes: [ {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

module.exports = mongoose.model('User', User)