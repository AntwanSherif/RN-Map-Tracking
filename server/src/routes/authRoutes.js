const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req,  res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    
    res.send({ message: 'successful signup!' });
  } catch (error) {
    res.status(422).send({ message: error.message });
  }
});

module.exports = router;