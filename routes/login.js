var express = require('express');
var router = express.Router();

let arr=[]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    const entrada= req.body
    arr.push(entrada)
    console.log(req.body);
    

  });

module.exports = router;
