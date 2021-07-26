var mongoose = require('mongoose');
const express=require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const port=3000;
const app=express();

var http = require("http").createServer(app);
// var StudentModel = require('./studentschema');

var fileSystem = require("fs");
var fastcsv = require("fast-csv");
 
app.use("/public", express.static(__dirname + "/public"));
http.listen(4000, function () {
    console.log("Connected");
    app.get("/exportData", function (request, result) {
        
        // var data = [{
        //     "id": 1,
        //     "name": "Adnan",
        //     "age": 29
        // }, {
        //     "id": 2,
        //     "name": "Ali",
        //     "age": 31
        // }, {
        //     "id": 3,
        //     "name": "Ahmad",
        //     "age": 33
        // }];
        var query = 'mongodb://localhost:27017'
  
         const db = (query);

        mongoose.connect(db, { useNewUrlParser : true, 
            useUnifiedTopology: true }, function(error) {
                if (error) {
                    console.log("Error!" + error);
                }
                console.log("ket noi thanh cong !");
            });
            StudentModel.find(function(err, data1) {
                if(err){
                    console.log(err);
                }
                else{
                 const  data = data1.map(oj =>{
                     
                     return JSON.parse(JSON.stringify(oj));
                 });
                 
                 console.log(data);
                 var ws = fileSystem.createWriteStream("public/data.csv");
        fastcsv
            .write(data, { headers: true })
            .on("finish", function() {
 
                result.send("<a href='/public/data.csv' download='data.csv' id='download-link'></a><script>document.getElementById('download-link').click();</script>");
            })
            .pipe(ws);
                }
            });  
        
 
        
    });
});
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
const StudentModel = require('./studentschema');
const { json } = require('body-parser');
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