const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productName:String,
    price:Number,
    qty:Number
})

module.exports = mongoose.model("Product",ProductSchema)
