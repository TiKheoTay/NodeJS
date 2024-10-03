const connection = require('../config/database');
const { getAllUsers, updateUserById, getUserById } = require('../service/CRUDService');
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home', { listUsers: results });
}
const postCreateUser = async (req, res) => {
    try {

        let { email, name, city } = req
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
const getUpdatePage = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID);
    res.render('update', { userEdit: user });
}


const getCreateUser = (req, res) => {
    res.render('create');
}

//UpdateUserByID
const postUpdateUser = async (req, res) => {
    let { email, name, city, userID } = req.body;
    console.log('Dữ liệu nhận được:', { email, name, city, userID });

    await updateUserById(email, name, city, userID);
    res.redirect('/');

}
module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser,
    getUpdatePage,
    postUpdateUser
}