var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dateSchema = new Schema({
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
});

var dataSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  date: dateSchema,
  accomodation: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  travelling: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Data', dataSchema);
