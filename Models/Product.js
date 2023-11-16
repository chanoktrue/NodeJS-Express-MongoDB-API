const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productCode: String,
    productName: {
        type: String
    },
    price: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('products', productSchema)