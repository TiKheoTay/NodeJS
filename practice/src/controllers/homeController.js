const connection = require('../config/database');

const getHomepage = (req, res) => {

    return res.render('home');
}
const postCreateUser = async (req, res) => {
    try {
        let { email, name, city } = req.body;
        console.log('Dữ liệu nhận được:', { email, name, city });

        const [results, fields] = await connection.query(
            `INSERT INTO user (email, name, city) VALUES (?, ?, ?)`,
            [email, name, city]
        );
        console.log('Kết quả insert:', results);
        res.send('Tạo user thành công');
    } catch (error) {
        console.error('Chi tiết lỗi khi tạo user:', error);
        res.status(500).send(`Có lỗi xảy ra khi tạo user: ${error.message}`);
    }
}

const getCreateUser = (req, res) => {
    res.render('create');
}
module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser
}