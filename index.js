require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log("DataBase Connected");
 
}

//body parser
server.use(cors());
server.use(express.json());  
server.use(morgan('default'));
// server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.use('*',(req,res)=>{
      // res.sendFile(__dirname+'/build/index.html');
      res.sendFile(path.resolve(__dirname,'build','index.html'));

})

     
server.listen(process.env.PORT,()=>{
    console.log("server started");
});