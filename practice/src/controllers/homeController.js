const getHomepage = (req, res) => {
    res.send('Hello World');
}
const getAboutPage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getAboutPage
}