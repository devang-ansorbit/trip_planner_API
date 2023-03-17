require('dotenv').config();
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./src/routes/dataRoute');

mongoose.set('strictQuery', false);

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conection successfull'))
  .catch((error) => console.log('Error:', error));

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.listen(8000, function check(error) {
  if (error) {
    console.log('Erro:', error);
  } else {
    console.log('Server Started');
  }
});
