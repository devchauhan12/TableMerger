const mongoose = require('mongoose')

const url = 'mongodb+srv://devchauhansurat:Dev%402362@cluster0.ev6czux.mongodb.net/TableMerger'

const db = async () => {
    try {
        await mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = db;