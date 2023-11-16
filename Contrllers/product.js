//Get one product
exports.read = async (req, res) => {
    try {
        const id = req.params.id
        res.status(200).send(`read one product id:${id}  complte`)
    }catch (err) {
        res.status(400).send('Server error')
    }
}

//Get all product
exports.list = async (req, res) => {
    try {
        res.status(200).send('list all product complete')
    }catch (err) {
        res.status(400).send('Server errror')
    }
}

//Post create product
exports.create = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('create produdct complte')
    }catch (err) {
        res.status(400).send('Server errror')
    }
}

//Put update product
exports.update = async (req, res) => {
    try {
        const id = req.params.id
        res.status(200).send(`update product id: ${id} complte`)
    }catch (err) {
        res.status(400).send('Server error')
    }
}

//Delete remove product
exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        res.status(200).send(`remove product id: ${id} complte`)
    }catch (err) {
        res.status(400).send('Server errror')
    }
}