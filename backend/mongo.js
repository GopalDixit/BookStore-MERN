const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/BookStore')
.then(()=>{
    console.log("MongpDB Connected")
})
.catch(()=>{
    console.log("Error in connection")
})