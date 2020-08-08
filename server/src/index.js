require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

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