var express = require('express');
var router = express.Router();

var recipesController = require('../controllers/recipes')

/* GET home page. */
router.get('/', recipesController.home);

module.exports = router;
