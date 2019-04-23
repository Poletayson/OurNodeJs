var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
//const Product = mongoose.model("Product", productSch);

module.exports.Product = mongoose.model("Product", productSch);




// // /stylesheets/css/sb-admin.css
//
// var product =



// const product = new Product({
//     title: "Test",
//     code: "1234",
//     description: "Aaaa",
//     img: "",
//     balance: 5
// });
//
// product.save(function(err){
//     mongoose.disconnect();  // отключение от базы данных
//
//     if(err) return console.log(err);
//     console.log("Сохранен объект", product);
// });




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var oneProductsRouter = require('./routes/oneProduct');
var ejs = require('ejs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use('/public', express.static('public'));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/products/add', productsRouter);
app.use('/products/add/do', productsRouter);
app.use('/products/:idd', oneProductsRouter);
app.use('/products/:idd/save', oneProductsRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

