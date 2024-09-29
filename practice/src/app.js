const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

//config env
require('dotenv').config();

//config database
const connection = require('./config/database');

// Kiểm tra kết nối
connection.query('SELECT 1')
    .then(() => console.log('Kết nối database thành công.'))
    .catch(err => console.error('Lỗi kết nối database:', err));

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

//khai báo routes
app.use('/', webRoutes); //tất cả routes đều có / đứng trước 

const hostname = process.env.HOST_NAME || 'localhost';
const port = process.env.PORT || 3000;
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})
