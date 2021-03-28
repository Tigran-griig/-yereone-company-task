const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name : String,
    price : String,
    rate : String,
    available : Boolean,
    newProduct : Boolean,
    bestSelling : Boolean,
    sale : Boolean
})

module.exports = mongoose.model("Products",productSchema)