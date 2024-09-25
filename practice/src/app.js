const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
require('dotenv').config();
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;


//config view engine
configViewEngine(app);
//khai báo routes
app.use('/v', webRoutes);//tất cả route đều có /v đứng trước 

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})
