var express = require('express');
const { Mongodb,MongoClient,ObjectId} = require('mongodb');
var router = express.Router();

const mongodbUrl = 'mongodb+srv://programmerpraveenkumar:SuPcrULSyxtz4iV7@cluster0.twdnbua.mongodb.net/';
const mongoDb = new MongoClient(mongodbUrl);

router.post("/createProduct",async(req,res)=>{
    let{category,reviewText,name} = req.body;
    
    let data = {
        "name":name,
        "category":category,
        "reviewText":reviewText,
        "filename":req.files.img.name,
        "isApproved":0
    }
    let path = process.cwd()+"/uploads/"+req.files.img.name;
    req.files.img.mv(path,(err)=>{});
    
    const db = mongoDb.db('product-review')
    await db.collection("product").insertOne(data);
    res.json({"msg":"product added"});
    })


router.post("/addReviewForProduct",async(req,res)=>{
let{id,reviewText,rating} = req.body;

let data = {
    "product_id":id,
    "rating":rating,
    "reviewText":reviewText,
    "isApproved":"0"
} 
const db = mongoDb.db('product-review')
await db.collection("review").insertOne(data);
res.json({"msg":"review added .."});
})


// http://localhost:8080/product/getAllProducts
router.get("/getAllApprovedProducts",async (req,res)=>{
    const db = mongoDb.db('product-review');
   //let list = await  db.collection("product").find().skip(2).limit(10).sort({"name":1}).toArray();
   let list = await  db.collection("product").find({"isApproved":"1"}).toArray();
    res.json(list);
})

router.get("/getProductDetailById",async (req,res)=>{
    let {id} = req.query;
    const db = mongoDb.db('product-review');
    let product = await db.collection("product").findOne({"_id":ObjectId.createFromHexString(id)});
    let review = await db.collection("review").find({"product_id":id}).toArray();
    res.json({"product":product ,"review":review});
})

module.exports = router;