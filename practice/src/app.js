const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const configViewEngine = require('./config/viewEngine');

require('dotenv').config();
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
//config view engine
configViewEngine(app);


//static file
app.use(express.static(path.join(__dirname, 'public')));
//template engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

//routes init
app.get('/', (req, res) => {
    res.render('sample.ejs')
})




app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})
