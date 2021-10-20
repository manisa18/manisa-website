const express = require('express');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/base.html`);
})
app.post('/send', (req,res) => {
    console.log(req.body);
    res.redirect('/');
})
app.listen(PORT, () => {
    console.log('Server running');
})