// app.js

const express = require('express');
const app = express();
const port = 3000; // or any port you prefer

// Your routes will go here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const logger = require('./logger');
const home = require('./home');

app.use(logger);

app.use(express.static('./pages'));


  