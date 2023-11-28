const express = require('express')
const collection = require('./mongo')
const app = express();
const bookroutes = require('./routes/bookroutes');
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: 'http://deploy-vercel-link',
    methods:["POST","GET"],
    credential:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));
monggose.coonect('mongodb+srv://Gopaldixit:<Gopalatlas>@cluster0.4iwukso.mongodb.net/?BookStoreretryWrites=true&w=majority')
app.use('/api/v1',bookroutes)

app.get('/',function(req,resp){
    resp.send('Hello')
})

app.listen(5600,()=>{
    console.log("Port Connected")
})
