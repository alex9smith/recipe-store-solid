var express = require('express');
var router = express.Router();

var solidController = require('../controllers/solid')

/* GET solid demo page */
router.get('/', function(req, res, next) {
  res.render('solid');
});

router.get('/login', solidController.login)

module.exports = router;