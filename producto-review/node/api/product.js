var express = require('express');
var router = express.Router();

// http://localhost:8080/user/login
router.post("/addReviewForProduct",(req,res)=>{
let{product_id,reviewText,user_id,name} = req.body;

})


// http://localhost:8080/product/getAllProducts
router.get("/getAllProducts",(req,res)=>{
let productList = [
    {"name":"prduct1"},
    {"name":"prduct18"},
    {"name":"pkhkgrduct1"},{"name":"prduclkjt1"},
    {"name":"i7typrduct1"},{"name":";ljprduct1"}
]
res.json(productList);
})
router.get("/getProductDetailById",(req,res)=>{
let {id} = req.query;
})

module.exports = router;