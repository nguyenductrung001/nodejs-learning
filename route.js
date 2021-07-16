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
  app.post('/hello' , function(req,res){
      res.send('bạn vừa gửi phương thức post tới địa chỉ  /hello');
  });