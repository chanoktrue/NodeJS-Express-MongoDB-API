const express = require('express')
const {readdirSync} = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./Config/db')

const app = express()
const port = 3001

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({limit: '10mb'}))
connectDB()

readdirSync('./Routes').map((r) => {
    const pathRoutes = ('./Routes/'+r)
    app.use('/api', require(pathRoutes))
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})