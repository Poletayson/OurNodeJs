var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// установка схемы
const productSch = new Schema({
    title: String,
    code: String,
    description: String,
    img: String,
    balance: Number
});

// подключение
mongoose.connect("mongodb://localhost/ourdb", { useNewUrlParser: true });
const Product = mongoose.model("Product", productSch);


// router.get('/', function(req, res, next) {
//     let template = ejs.compile(str, options);
//     template(data);
//     // => Rendered HTML string
//
//     ejs.render(str, data, options);
//     // => Rendered HTML string
//
//     ejs.renderFile(filename, data, options, function(err, str){
//         // str => Rendered HTML string
//     });
// });


/* GET home page. */
router.get('/', function(req, res, next) {

    Product.find().exec(function(err,docs) {

        res.render('productList', {
            products: docs                     //include(\"/index.ejs\")
        });

    });





});

module.exports = router;