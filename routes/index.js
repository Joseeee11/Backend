var express = require('express');
const ControladorIndex = require('../controllers/index');
var router = express.Router();


/* GET home page. */
router.get('/',ControladorIndex.probandoControlles, function(req, res, next) {
  
});

module.exports = router;
