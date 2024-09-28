const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
require('dotenv').config();
const connection = require('./config/database');
const hostname = process.env.HOST_NAME || 'localhost';
const port = process.env.PORT || 3000;





//test connect db


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
app.use('/', webRoutes); //tất cả route đều có / đứng trước 





app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})
