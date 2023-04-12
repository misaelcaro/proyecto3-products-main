const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()

const { port } = require('../config')

const userRouter = require('./products/products.router')

const db = require('./utils/database')



//? Validar la conexión 

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
    


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK', 
        myMessage: process.env.MESSAGE, 
        myPort: process.env.PORT
    })
}) 





 app.use('/api/v1/products', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

module.exports = app