const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//http logger
app.use(morgan('combined'));

//static file
app.use(express.static(path.join(__dirname, 'public'))); ``
//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//routes init
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/search', (req, res) => {
    res.render('search');
})
app.get('/olala', (req, res) => {
    res.render('olala');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
