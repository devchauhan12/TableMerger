const productModel = require("../models/productModel")
const subCategoryModel = require("../models/subCategoryModel")

const productGet = async (req, res) => {
    try {
        const product = await productModel.find({}).populate({
            path: 'subCategoryID',
            populate: {
                path: 'categoryID'
            }
        })
        console.log(product)
        res.render('pages/product', { product: product })
    } catch (error) {
        console.log(error)
    }
}
const productAdd = async (req, res) => {
    try {
        console.log(req.body)
        const product = await productModel.create(req.body)
        res.redirect('back')
    } catch (error) {
        console.log(error)
    }
}
const productForm = async (req, res) => {
    try {
        const subcategory = await subCategoryModel.find({})
        res.render('pages/addproduct', { subcategories: subcategory })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { productAdd, productGet, productForm }