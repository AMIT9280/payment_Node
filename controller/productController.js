const productModel = require("../model/productModel")


// Add Products
module.exports.AddProduct = function (req, res) {

    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty

    let product = new productModel({

        "productName": productName,
        "price": price,
        "qty": qty
    })
    product.save(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                Status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Product Added",
                status: 200,
                data: data
            })
        }
    })
}//Product Add

//GetAll Products 
module.exports.getAllproducts = function (req, res) {

    productModel.find(function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Product Retr...",
                status: 200,
                data: data
            })
        }
    })
}//GetAll Products 

module.exports.UpdateProduct = function (req, res) {

    let productId = req.body.productId
    let price = req.body.price
    let qty = req.body.qty

    productModel.updateOne({ _id: productId }, { price: price, qty: qty }, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Product Updated...",
                status: 200,
                data: data
            })
        }
    })
}//product updated...

module.exports.DeleteProduct = function (req, res) {

    let productId = req.body.productId

    productModel.deleteOne({ _id: productId }, function (err, data) {
        if (err) {
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        } else {
            res.json({
                msg: "Product Removed",
                status: 200,
                data: data
            })
        }
    })
}//Delete Product