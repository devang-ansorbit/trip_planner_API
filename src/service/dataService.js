const dataModel = require('../model/dataModel');
var dataModel = require('../model/dataModel');

module.exports.getDataFromDBService = () => {
  return new Promise((resolve, reject) => {
    dataModel.find({}, function myFn(error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports.createDataInDBService = (data) => {
  return new Promise((resolve, reject) => {
    var dataModelData = dataModel();
    dataModelData.city = data.city;
    dataModelData.accomodation = data.accomodation;
    dataModelData.budget = data.budget;
    dataModelData.currency = data.currency;
    dataModelData.food = data.food;
    dataModelData.travelling = data.travelling;
    dataModelData.date.start_date = data.date.start_date;
    dataModelData.date.end_date = data.date.end_date;

    dataModelData.save(function check(error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
