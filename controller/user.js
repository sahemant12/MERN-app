const fs = require('fs');
// const index = fs.readFileSync('practice_index.html','utf-8'); 
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;

 exports.createProduct = (req,res)=>{
    console.log(req.body);
    users.push(req.body);    
    res.json(req.body); 
}
exports.readAllProduct = (req,res)=>{
    res.json(users);
}
exports.readProduct = (req,res)=>{  
    console.log(req.params);
    const id = +req.params.id 
    const product = users.find((p)=>p.id===id)
res.json(product);
}
exports.updateProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = users.findIndex((p)=>p.id===id);
    users.splice(productIndex,1,{...req.body, id:id})  //splice have 3 index (i), (ii)How many elements we want to delete
res.status(201).json();
}
exports.replaceProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = users.findIndex((p)=>p.id===id);
    const product = users[productIndex];
    users.splice(productIndex,1,{...product, ...req.body})
res.status(201).json();
}
exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = users.findIndex((p)=>p.id===id);
    const product = users[productIndex];
    users.splice(productIndex,1)
res.status(201).json(product);
}