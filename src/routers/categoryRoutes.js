const { Router } = require('express')
const { CatGet, CatAdd, CatForm } = require('../controllers/CatControllers')

const CatRouter = Router()

CatRouter.get('/', CatGet)
CatRouter.get('/form', CatForm)
CatRouter.post('/form', CatAdd)

module.exports = CatRouter