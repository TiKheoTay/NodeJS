const express = require('express');
const router = express.Router();
const { getHomepage, getAboutPage } = require('../controllers/homeController');

//router.Method(/path, handler)
router.get('/', getHomepage);
router.get('/about', getAboutPage);
module.exports = router;//export router