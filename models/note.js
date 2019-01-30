const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Note = new Schema({
    // author: {
    // type: Schema.Types.ObjectId,
    // ref: "User"
    // },
    createdAt: {
        type: String
        },
    prompt: String,
    content: String
    });

    module.exports = mongoose.model('Note', Note)

// module.exports = mongoose
