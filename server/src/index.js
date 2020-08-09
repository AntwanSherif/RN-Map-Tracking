require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const requireAuth = require('./middlewares/requireAuth');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

// connect to db
const mongoUri = 'mongodb+srv://admin:passwordpassword@itclinic-u1gma.mongodb.net/RN-map-tracking?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () =>  {
  console.log('connected to mongo instance');
});
mongoose.connection.on('error', error =>  {
  console.log('Error connecting to mongo', error);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`You email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})