const express = require('express')
const router = express.Router()
const controller = require('../controllers/productos')
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.insert) 
router.delete('/:id', controller.remove)
router.put('/:id', controller.update)

module.exports = router