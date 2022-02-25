var express = require('express');
var router = express.Router();

var recipesController = require('../controllers/recipes')

router.get('/', recipesController.home);

router.get('/recipes', recipesController.recipes_home)

module.exports = router;
