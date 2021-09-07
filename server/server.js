// import axios from 'axios';
// var router = express.Router();
var axios = require('axios')
var mongoose = require('mongoose');
const express=require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const port=3000;
const app=express();
const connecrDB = require('./connection');
var http = require("http").createServer(app);
// var StudentModel = require('./studentschema');
var ProductModel = require('./Model/product');
var fileSystem = require("fs");
var fastcsv = require("fast-csv");
connecrDB();
//phân trang
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

});
app.use("/public", express.static(__dirname + "/public"));
http.listen(4000, function () {
    console.log("Connected");
    app.get("/exportData", function (request, result) {
       
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
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
}); 
  
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true})); 
  
// Parses the text as json
app.use(bodyParser.json());
app.use('/api', api);
const StudentModel = require('./Model/studentschema');
const { json } = require('body-parser');


// them moi vao api
// app.get('/insertapi',(req,res) => {
//     const urlApiThemMoi = 'https://api.punkapi.com/v2/beers';
// axios.get(urlApiThemMoi)
//    .then(function (response) {
//        console.log('response');
//        console.log(response);
//        const { data } = response;
//        console.log(response);

//        data.forEach(product =>{
//             var newProduct = new ProductModel({
//                 name: product.name,
//                 tagline: product.tagline,
//                 first_brewed:product.first_brewed,
//                 description:product.description
//                 });
            
//                 newProduct.save(function(err, data) {
//                 if(err) {
//                     console.log(err);
//                 }
//                 else {
//                     res.send("Data inserted");
//                 }
//             });
//        });
//    })
//    .catch(function (error) {
//        console.error('error');
//        console.error(error);
//    })
// })
