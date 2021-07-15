var express = require('express');
var app = express();
app.get('/',function(request,response){
    response.send('Welcome to JavaTpoint');   
})
var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)  
})

app.get('/hello', function(req, res){
    res.send("Hello World!");
 });
 app.get('/user/', (req, res) => {
    console.log(req.query.userID) // "123"
    console.log(req.query.action) // "changeProfile"
    res.send(req.query);
  })
 app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })
