require('dotenv').config();
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./src/routes/dataRoute');

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlPareser: true, useUnifiedTopolgy: true },
  function checkDB(error) {
    if (error) {
      console.log('Erro: ', error);
    } else {
      console.log('DB Connected');
    }
  }
);

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(8000, function check(error) {
  if (error) {
    console.log('Erro:', error);
  } else {
    console.log('Server Started');
  }
});
