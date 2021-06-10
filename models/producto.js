const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductoSchema = Schema(
    {
        _id: {type: Schema.ObjectId, auto:true},
        nombre: String,
        descripcion: String,
        precio: Number,
    }
)

module.exports = mongoose.model('producto', ProductoSchema)