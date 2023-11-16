const express = require('express')
const route = express.Router()

const {read, list, create, update, remove} = require('../Contrllers/product')
const {auth} = require('../Middleware/atuh')

route.get('/product/:id', auth, read)
route.get('/product', auth, list)
route.post('/product', auth, create)
route.put('/product/:id', auth, update)
route.delete('/product/:id', auth, remove)

module.exports = route