var express = require('express');
var router = express.Router();

//GET home page
router.get('../views', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;