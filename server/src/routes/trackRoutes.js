const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async(req, res) => {
    const tracks = await Track.find({ userId: req.user._id }); 

    res.send(tracks);
});

router.post('/tracks', async(req, res) => {
  const { name, locations } = req.body;

  if(!name || !locations) {
    res.status(422).send({ error: 'You must provide name and locations'})
  }

  try {
    const track = new Track({ userId: req.user._id, name, locations });
    await track.save();
  
    res.send(track);
  } catch (error) {
    res.status(422).send({ error: error.message })
  }
});

module.exports = router;