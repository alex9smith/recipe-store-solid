var express = require('express');
var router = express.Router();

var solidController = require('../controllers/solid')

/* GET solid demo page */
router.get('/', function(req, res, next) {
  res.render('solid/solid');
});

router.get('/login', solidController.render_login);

router.post('/login', solidController.login);

router.get('/login/callback', solidController.callback);

router.get('/home', solidController.home);

module.exports = router;