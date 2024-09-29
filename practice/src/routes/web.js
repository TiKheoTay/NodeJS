const express = require('express');
const router = express.Router();
const { getHomepage, postCreateUser, getCreateUser } = require('../controllers/homeController');

//router.Method(/path, handler)
router.get('/', getHomepage);
router.get('/create', getCreateUser);
router.post('/create-user', postCreateUser);

module.exports = router;//export router