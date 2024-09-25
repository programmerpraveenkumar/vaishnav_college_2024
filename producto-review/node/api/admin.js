var express = require('express');
var router = express.Router();

// http://localhost:8080/admin/login
router.post("/login",(req,res)=>{
let{email,password} = req.body;

})

// http://localhost:8080/admin/getUnApprovedListw
router.get("/getUnApprovedList",(req,res)=>{
   
    
})

// http://localhost:8080/admin/approveReview
router.post("/approveReview",(req,res)=>{
   
    
})

module.exports = router;