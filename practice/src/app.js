const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
require('dotenv').config();
const mysql = require('mysql2');
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;





//test connect db
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'laptopshop'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql connected...');
});

//simple query

connection.query(
    'SELECT * FROM Users p',
    function (err, results, fields) {
        console.log('results = ', results); // results contains rows returned by server
        console.log('fields = ', fields); // fields contains extra meta data about results, if available
    }
);




//config view engine
configViewEngine(app);




//khai báo routes
app.use('/v', webRoutes);//tất cả route đều có /v đứng trước 





app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})
