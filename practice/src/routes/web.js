const express = require('express');
const router = express.Router();
const { getHomepage, postCreateUser, getCreateUser, getUpdatePage, postUpdateUser } = require('../controllers/homeController');

//router.Method(/path, handler)
router.get('/', getHomepage);
router.get('/create', getCreateUser);
router.post('/create-user', postCreateUser);
router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)
module.exports = router;//export router