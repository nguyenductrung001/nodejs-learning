const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads"); //Đường dẫn upload ảnh
  },
  filename: (req, file, cb) => {
    //File lúc này sẽ được lưu vào vùng nhớ tạm thời
    cb(null, Date.now() +"_" +  file.originalname);
  }
});
const upload = multer({ storage: storage });
 
/*
 - Bắt đầu khai báo middleware
*/
//Khaiai báo static folder
// app.use(express.static('./uploads'));
app.use('/uploads', express.static('uploads'));
 
//Khai báo đường dẫn đến thư mục chứa các template
app.set("views", "./view");
//Khai báo templateEngine sử dụng
app.set("view engine", "pug");
// parsing application/json
app.use(bodyParser.json());
//  parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
/*
 - Kết thúc khai báo middleware
*/
 
//Khởi tạo router get
app.get("/", (req, res) => {
  res.render("form");
});
 
//Khởi tạo router post
 
app.post("/", upload.single("avatar"), (req, res) => {
  const { body, file } = req;
  console.log(file)
  res.render("info", { body, file }); 
});
 
app.listen(8000);