var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var StudentModel = require('./studentschema');
  
// Connecting to database
var query = 'mongodb://localhost:27017'
  
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
    console.log("ket noi thanh cong !");
});
router.post('/save', function(req, res) {
    var newStudent = new StudentModel();
    newStudent.StudentId = req.body.StudentId;
    newStudent.Name = req.body.Name;
    newStudent.Roll = req.body.Roll;
    newStudent.Birthday = req.body.Birthday;
    newStudent.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});
router.get('/findall', function(req, res) {
    StudentModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });
router.delete('/delete',function(req,res){
StudentModel.remove({StudentId:"60f6373722b33d4064e74ef7"}, function(err,data){
    if(err){
        console.log("Xoa that bai " + err);
    }else{
        res.send(data);
        console.log("delete success!")
    }
});
});
router.put('/update', function(req, res) {
    StudentModel.findByIdAndUpdate(req.body.id, 
    {Name:req.body.Name}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});
module.exports = router;