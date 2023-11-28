const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    bookname:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    description :String,
    author:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('books',bookSchema)