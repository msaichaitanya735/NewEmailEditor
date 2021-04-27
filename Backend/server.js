const express = require('express')
const app = express()
const mongoose = require('mongoose')
const tempmodel = require('./model')
const routes = require('./router')
const cors = require('cors')
const path = require('path')

const port=5000

app.use(express.json()) 
app.use(cors())
app.use(express.static(path.join(__dirname,'../build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})

mongoose.connect("mongodb://Chay735:Asdf1234@chay-cluster-shard-00-00.pdmcr.mongodb.net:27017,chay-cluster-shard-00-01.pdmcr.mongodb.net:27017,chay-cluster-shard-00-02.pdmcr.mongodb.net:27017/template_db?ssl=true&replicaSet=atlas-jctal8-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log(" Mongoose is connected"))
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// new
app.use("/api", routes) // new



app.listen(port,()=>console.log("on port", port))


// 8830631677