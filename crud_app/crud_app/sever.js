const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyparser = require("body-parser");
const path = require('path')

const connecrDB = require('./server/database/connection');

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//mongoDB connection
connecrDB();

//parse requests to body-parser
app.use(bodyparser.urlencoded({ extended:true}))

//set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets
//css/style.css
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))

//load router

app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=>{
    console.log(`Sever is running on http://localhost:${PORT}`);
});