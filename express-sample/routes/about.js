var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   const  person =  { name:"jerry", admin:false}
  res.render('about', { person});
});

module.exports = router;
