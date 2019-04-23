var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //let ejs = require('ejs'),
        res.render('index', {
          title: "Express",
          dio: "Warudo"
      });
});

module.exports = router;
