
   const model = require('../model/product');
   const Product = model.Product;

//create
 exports.createProduct = (req,res)=>{
    
    //part-1
    // const product = new Product();
    // product.title = "RealmeX";
    // product.price = 9999;
    // product.rating = 4.4;
    // product.save();

    //part-2
    const product = new Product(req.body);
    product.save();

    res.status(201).json(req.body); 
}

//read
exports.readAllProduct = async (req,res)=>{
    const products = await Product.find();
    res.json(products);
}
exports.readProduct = async (req,res)=>{  
    const id = req.params.id 
    const product = await Product.findById(id);
res.json(product);
}
// //update
exports.updateProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
//replace
exports.replaceProduct = async (req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body);
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
//delete
exports.deleteProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}