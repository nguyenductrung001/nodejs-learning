
var mongoose = require('mongoose');
var express = require('express'); 
var route = express.Router();
var StudentModel = require('./studentschema');
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