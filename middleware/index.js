

const express = require('express')
const app = express()
 var checkRequest = (req,res,next) =>{
    console.log('Middleware chạy ở route có url ' + req.url + ' và method là ' + req.method )
     if(req.url === "/block"){
        res.send("Ban khong co quyen truy cap")
     }else{
         next()
     }
 }
 app.use(checkRequest)
 // tao rout
 app.get('/', function (req, res) {
    res.send('Truy cập thành công  get!')
  })
  app.get('/home', function (req, res) {
    res.send('Truy cập thành công home !')
  })
  app.get('/block', function (req, res) {
    res.send('Truy cập thành công block!')
  })
  app.listen(3000)





//   const express = require('express')
// const app = express()
// //Middleware function kiểm tra request
// var checkRequest = (req, res, next) => {
//     console.log('Middleware chạy ở route có url ' + req.url + ' và method là ' + req.method )
//     if (req.url === '/block') {
//         res.send('Bạn không có quyền truy cập !')
//     }else{
//         next()
//     }
// }
// //Khai báo sử dụng middleware
// app.use(checkRequest)
// //Khởi tạo route mới
 
// app.get('/', function (req, res) {
//   res.send('Truy cập thành công / !')
// })
// app.get('/home', function (req, res) {
//   res.send('Truy cập thành công home!')
// })
// app.get('/block', function (req, res) {
//   res.send('Truy cập thành công block !')
// })
 
// //Sử dụng port 3000 
// app.listen(3000)