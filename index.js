const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const routerProductos = require('./routers/productos')
dotenv.config()

let app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/producto', routerProductos)

const run = async() =>{
    const config ={
        useFindAndModify: true, 
        useNewUrlParser: true, 
        useUnifiedTopology:true
    }
    await mongoose.connect(process.env.URL_BASEDATOS, config)
    await app.listen(process.env.PUERTO_SERVIDOR)
    console.log('Servidor y la base de datos encendidos')
}
run().catch(error => console.log('Fallo al intentar arrancar: ', error))