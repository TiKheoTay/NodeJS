const express = require('express');
const router = express.Router();
const { getHomepage, postCreateUser } = require('../controllers/homeController');

//router.Method(/path, handler)
router.get('/', getHomepage);
router.post('/create-user', postCreateUser);

module.exports = router;//export router