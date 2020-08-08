const express = require('express');
const router = express.Router();

router.post('/signup', (req,  res) => {
  res.send('you made a post request')
});

module.exports = router; 