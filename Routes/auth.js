const express = require('express')
const route = express.Router()

route.get('/auth', (req, res) => {
    res.send("auth")
})

module.exports = route