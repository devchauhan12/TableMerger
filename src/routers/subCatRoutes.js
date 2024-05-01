const { Router } = require('express')
const { subCatGet, subCatAdd, subCatForm } = require('../controllers/subCatControllers')

const subCatRouter = Router()

subCatRouter.get('/', subCatGet)
subCatRouter.get('/form', subCatForm)
subCatRouter.post('/form', subCatAdd)

module.exports = subCatRouter