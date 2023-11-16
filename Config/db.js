const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/db2')
        console.log('DB connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB