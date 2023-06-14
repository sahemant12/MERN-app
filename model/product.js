const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema
const productSchema = new Schema({
    id: String,
    title: {type:String, required:true, unique:true}, //all these are validator or constraints for any productElement
    description: String,
    // price: Number,
    price: { type: Number, min:[0,'wrong price']},
    // discountPercentage: Number,
    discountPercentage: { type: Number, min:[0,'wrong min discountPercentage'], max:[60,'wrong max discountPercentage'] },
    // rating: Number,
    rating: { type: Number, min:[0,'wrong min rating'], max:[5,'wrong max rating'], default:0 },
    brand: {type:String, required:true},
    category: {type:String, required:true},
    thumbnail: {type:String, required:true},
    images: [ String ]
  });
   exports.Product = mongoose.model('Product', productSchema);