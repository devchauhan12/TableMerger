const { Router } = require('express')
const { productGet, productForm, productAdd } = require('../controllers/productControllers')

const ProductRouter = Router()

ProductRouter.get('/', productGet)
ProductRouter.get('/form', productForm)
ProductRouter.post('/form', productAdd)

module.exports = ProductRouter