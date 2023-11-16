const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema({
    userId: String,
    token: String
}, {timestamps: true})

module.exports = mongoose.model('tokens', tokenSchema)