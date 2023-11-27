// routes/contact.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Render the contact form
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/pages/game_suggestion.html'));
});

module.exports = router;
