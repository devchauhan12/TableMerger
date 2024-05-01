const express = require('express');
const db = require('./config/db');
const subCatRouter = require('./routers/subCatRoutes');
const CatRouter = require('./routers/categoryRoutes');
const ProductRouter = require('./routers/productRoutes');

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/category', CatRouter)
app.use('/subcategory', subCatRouter)
app.use('/product', ProductRouter)

app.get('/', (req, res) => {
    res.render('pages/index')
})

// Start the server
app.listen(3000, (err) => {
    db()
    if (err) {
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:3000`)
})