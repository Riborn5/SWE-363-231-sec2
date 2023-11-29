const express = require('express');
const app = express.Router();

app.use(express.static('./pages'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/pages/main_page.html');
    });


module.exports = app;
