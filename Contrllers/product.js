const Product = require('../Models/Product')
//Get one product
exports.read = async (req, res) => {
    try {
        const id = req.params.id
        const producted = await Product.find({_id: id}).exec()
        res.status(200).send(producted)
    }catch (err) {
        res.status(400).send('Server error')
    }
}

//Get all product
exports.list = async (req, res) => {
    try {
        const producted = await Product.find().exec()
        res.status(200).send(producted)
    }catch (err) {
        res.status(400).send('Server errror')
    }
}

//Post create product
exports.create = async (req, res) => {
    try {   
        const producted = await Product(req.body).save()
        res.status(200).send(producted)
    }catch (err) {
        res.status(400).send('Server errror')
    }
}

//Put update product
exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const producted = await Product.updateOne({_id: id}, req.body).exec()
        res.status(200).send(producted)
    }catch (err) {
        res.status(400).send('Server error')
    }
}

//Delete remove product
exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const producted = await Product.deleteOne({_id: id}).exec()
        res.status(200).send(producted)
    }catch (err) {
        res.status(400).send('Server errror')
    }
}