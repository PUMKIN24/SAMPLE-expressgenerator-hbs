var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const values = [1,2,3,4]
  res.render('about', { values});
});

module.exports = router;
