const mysql = require('mysql2/promise');
require('dotenv').config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);

// Tạo pool kết nối
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Sau phần tạo connection
connection.query('SHOW TABLES')
    .then(([rows]) => {
        console.log('Danh sách các bảng trong database:', rows);
    })
    .catch(err => {
        console.error('Lỗi khi truy vấn danh sách bảng:', err);
    });

module.exports = connection;




