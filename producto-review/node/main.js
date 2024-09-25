var cors = require('cors');
var express = require('express');
const fileUpload = require('express-fileupload');

var app = express();
app.use(cors())
 
app.use(express.json());
app.use(fileUpload());
app.use('/upload', express.static('uploads'))

var user = require("./api/user");
app.use("/user",user)  

var product = require("./api/product");
app.use("/product",product)  

const portno = 8080
app.listen(portno,()=>{
    console.log(`server is running on ${portno}`);
})