var express = require('express');
var router = express.Router({ mergeParams: true });

var exp = require("../app.js");


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
//
//
//
// // установка схемы
// const productSch = new Schema({
//     title: String,
//     code: String,
//     description: String,
//     img: String,
//     balance: Number
// });
//
// // подключение
// mongoose.connect("mongodb://localhost/ourdb", { useNewUrlParser: true });
const Product = exp.Product;





/* GET home page. */
router.get('/', function(req, res, next) {

    Product.findOne({ _id: req.params.idd }, function(err, prod) {
        //console.log(req.query);
        console.log("Продукт ",prod);

        res.render('productPage', {
            product: prod                     //include(\"/index.ejs\")
        });

    });


});

module.exports = router;