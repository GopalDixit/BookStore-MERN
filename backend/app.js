const express = require('express')
const mongoose = require('./mongo')
const app = express();
const bookroutes = require('./routes/bookroutes');
const cors = require('cors')

app.use(express.json())
app.use(cors());
app.use('/api/v1',bookroutes)

app.get('/',function(req,resp){
    resp.send('Hello')
})

app.listen(5600,()=>{
    console.log("Port Connected")
})
