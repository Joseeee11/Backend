var express = require('express');
var router = express.Router();
var cors = require('cors');

let arr=[]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send("Ok")
  });

module.exports = router;
