const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/pages/main_page.html');
    });


module.exports = app;
