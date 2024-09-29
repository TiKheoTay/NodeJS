const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM user');
    return results;
}

module.exports = {
    getAllUsers
}