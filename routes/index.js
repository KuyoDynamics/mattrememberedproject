var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('from the router');
  // res.render('index', { title: 'Express' });
  res.send('hello')
  // console.log('Hello')
});

module.exports = router;
