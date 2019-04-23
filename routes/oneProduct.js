var express = require('express');
var router = express.Router({ mergeParams: true });

var exp = require("../app.js");


const Product = exp.Product;

/* GET home page. */
router.get('', function(req, res, next) {

    Product.findOne({ _id: req.params.idd }, function(err, prod) {
        //console.log("Длинища ", Object.keys(req.query).length);
        if (Object.keys(req.query).length > 0)
        {
            console.log("Параметры ", req.query);
            var img = req.query.img;
            var title = req.query.title;
            var code = req.query.cod;
            var balance = req.query.balance;
            var description = req.query.description;
//var title = req.body.title;
            console.log("fdhdfhfhf ",title);
            // router.get('/', function(req, res, next) {

            Product.findOne({ _id: req.params.idd }, function(err, prod) {
                 console.log("Функция сохранения для ",prod);
                prod.img = img;
                prod.title = title;
                prod.code = code;
                prod.balance = balance;
                prod.description = description;

                prod.save(function(err){
                    //mongoose.disconnect();  // отключение от базы данных

                    if(err) return console.log(err);
                    console.log("Сохранен объект", prod);
                });

                //req.query.
                //document.location.href ("http://127.0.0.1:3000/products")
                //return res.redirect("http://127.0.0.1:3000/products");
            });
        }

            res.render('productPage', {
                product: prod                     //include(\"/index.ejs\")
            });



    });

});


/* GET home page. */
router.post('/save', function(req, res, next) {
    //console.log("Зашли сюда");

    //var exp = require("../../app.js");
    var img = req.body.img;
    var title = req.body.title;
    var code = req.body.code;
    var balance = req.body.balance;
    var description = req.body.description;
//var title = req.body.title;
    //console.log("fdhdfhfhf ",title);
    // router.get('/', function(req, res, next) {

    Product.findOne({ _id: req.params.idd }, function(err, prod) {
        //console.log(req.query);
        console.log("Функция сохранения для ",prod);
        prod.img = img;
        prod.title = title;
        prod.code = code;
        prod.balance = balance;
        prod.description = description;

        prod.save(function(err){
            //mongoose.disconnect();  // отключение от базы данных

            if(err) return console.log(err);
            console.log("Сохранен объект", prod);
        });
        //window.history.back();
        var str = '/products/' + prod._id;
        res.redirect(str);
    });



    // Product.findOne({ _id: req.params.idd }, function(err, prod) {
    //     //console.log(req.query);
    //     console.log("Продукт ",prod);
    //
    //     res.render('productPage', {
    //         product: prod                     //include(\"/index.ejs\")
    //     });
    //
    // });

});

module.exports = router;