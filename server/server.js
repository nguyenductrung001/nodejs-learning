
const express=require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const port=3000;
const app=express();
// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
//     if(err){
//         return console.log(err);

//     }
//     console.log("Da ket noi thanh cong")
// })
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
}); 
  
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true})); 
  
// Parses the text as json
app.use(bodyParser.json());
app.use('/api', api);