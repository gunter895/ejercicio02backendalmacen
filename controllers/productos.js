let Producto = require('../models/producto')

async function getAll(req, res){
    let productos = await Producto.find()
    try{
        res.status(200).json(productos)
    }catch(err){
        res.status(500).json('Error al obtener todos los productos')
    }
}

async function getById(req, res){
    let id = req.params.id
    let producto = await Producto.findById(id)
    try{
        res.status(200).json(producto)
    }catch(err){
        res.status(500).json('Error al obtener un producto')
    }
}

async function insert(req, res){
    const nuevoProducto = new Producto(req.body)
    try{
        const productoGuardado = await nuevoProducto.save()
        res.status(201).json(productoGuardado)
    }catch(err){
        res.status(500).json('Error al guardar el producto')
    }
}

async function remove(req, res){
    const id = req.params.id
    try{
        const productoBorrado = await Producto.findByIdAndDelete(id)
        res.status(204).json(productoBorrado)
    }catch(err){
        res.status(500).json('Error al borrar el producto')
    }

}

async function update(req, res){
    const id = req.params.id
    const datos = req.body
    try{
        const ProductoActualizado = await Producto.findByIdAndUpdate(id, datos, {new:true})
        res.status(200).json(ProductoActualizado)
    }catch{
        res.status(500).json('Error al actualizar el producto')
    }
}

module.exports = {getAll, getById, insert, remove, update}