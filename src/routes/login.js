var express = require('express');
var router = express.Router();

var loginController = require('../controllers/login')

router.get('/', loginController.render_login);

router.post('/', loginController.login);

router.get('/callback', loginController.callback);

module.exports = router;