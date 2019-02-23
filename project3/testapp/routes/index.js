var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var mqtt = require('mqtt')
  
  res.render('index', { title: 'Workshop' });
});

module.exports = router;
