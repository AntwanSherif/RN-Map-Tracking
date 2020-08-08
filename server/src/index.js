const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

// connect to db
const mongoUri = 'mongodb+srv://admin:passwordpassword@itclinic-u1gma.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () =>  {
  console.log('connected to mongo instance');
});
mongoose.connection.on('error', error =>  {
  console.log('Error connecting to mongo', error);
});

app.get('/', (req, res) => {
  res.send('Hi there!')
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})