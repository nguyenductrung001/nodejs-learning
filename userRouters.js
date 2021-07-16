// var express = require('express');
// var app = express();
// app.get('/',function(request,response){
//     response.send('Welcome to JavaTpoint');   
// })
// var server = app.listen(3000,function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)  
// })
//   app.post('/hello' , function(req,res){
//       res.send('bạn vừa gửi phương thức post tới địa chỉ  /hello');
//   });
var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res){
   res.send('Ban da truy cap dia chi /user bang phuong thuc GET');
});
router.post('/', function(req, res){
   res.send('Ban da truy cap dia chi /user bang phuong thuc POST');
});
 
// Xuất bộ định tuyến này để có thể sử dụng ở file khác
module.exports = router;