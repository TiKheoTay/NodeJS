const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM user');
    return results;
}
const getUserById = async (userID) => {
    let [results, fields] = await connection.query('SELECT * FROM user WHERE id = ?', [userID]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserById = async (email, name, city, userID) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE user SET email=?,name=?, city=? WHERE id =?`,
            [email, name, city, userID]
        );
        return results;
    } catch (error) {
        console.error('Chi tiết lỗi khi tạo user:', error);
        res.status(500).send(`Có lỗi xảy ra khi update user: ${error.message}`);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById
}