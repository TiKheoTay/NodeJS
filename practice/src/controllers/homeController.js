const connection = require('../config/database');
const getHomepage = (req, res) => {
    return res.render('home');
}

const postCreateUser = (req, res) => {
    res.send('create user');
}


module.exports = {
    getHomepage,
    postCreateUser
}