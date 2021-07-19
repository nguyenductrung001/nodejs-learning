var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser())
app.get('/cookie', function(req, res){
    // /expires Date Thời điểm và cookie hết hạn, nếu không có giá trị hoặc giá trị bằng 0, nó sẽ tạo ra session cookie
     res.cookie('name', 'freetuts.net', { expires: new Date(Date.now() + 900000)});
     res.send('success') 
});
app.get('/getCookie', function(req, res){
    if (req.cookies.name)
        res.send(`Cookie name co gia tri la ${req.cookies.name}`)
   res.send('Khong the tim lay cookie co ten la name')
});
app.get('/deleteCookie', function(req, res){
    res.clearCookie( 'name');
    res.send('Da xoa cookie')
 });
app.listen(3000)