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


/* GET home page. */
router.post('/save', function(req, res, next) {
    console.log("Зашли сюда");

    //var exp = require("../../app.js");
    var img = document.getElementById("img").value;
    var title = document.getElementById("title").value;
    var code = document.getElementById("code").value;
    var balance = document.getElementById("balance").value;
    var description = document.getElementById("description").value;


    // router.get('/', function(req, res, next) {

    Product.findOne({ _id: req.params.idd }, function(err, prod) {
        //console.log(req.query);
        console.log("Функция сохранения для ",prod);
        prod.img = img;

        prod.save(function(err){
            //mongoose.disconnect();  // отключение от базы данных

            if(err) return console.log(err);
            console.log("Сохранен объект", prod);
        });


        res.redirect('');





    });






    Product.findOne({ _id: req.params.idd }, function(err, prod) {
        //console.log(req.query);
        console.log("Продукт ",prod);

        res.render('productPage', {
            product: prod                     //include(\"/index.ejs\")
        });

    });

});

module.exports = router;