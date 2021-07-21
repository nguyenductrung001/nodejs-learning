
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
const StudentModel = require('./studentschema')
const PAGE_SIZE = 2;
app.get('/student',(req,res,next)=>{
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        var soLuongBoQua =(page-1) * PAGE_SIZE

        StudentModel.find({})
        .skip(soLuongBoQua).limit(PAGE_SIZE)
        .then(data=>{
                res.json(data)
        })
        .catch(err=>{
            res.status(500).json("Loi server")
        })
    }else{
        StudentModel.find({})
    .then(data =>{
        res.json(data);
    })
    .catch(err=>{
        res.status(500).json("Loi server")
    })
    }
    
})