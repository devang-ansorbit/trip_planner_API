var dataModel = require('../model/dataModel');

module.exports.getDataFromDBService = () => {
  return new Promise((resolve, reject) => {
    console.log('Message:', dataModel);
    dataModel
      .find({})
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.createDataInDBService = (data) => {
  return new Promise((resolve, reject) => {
    var dataModelData = new dataModel({ ...data });
    // dataModelData = { ...data };
    // dataModelData.city = data.city;
    // dataModelData.accomodation = data.accomodation;
    // dataModelData.budget = data.budget;
    // dataModelData.currency = data.currency;
    // dataModelData.food = data.food;
    // dataModelData.travelling = data.travelling;
    // dataModelData.date.start_date = data.date.start_date;
    // dataModelData.date.end_date = data.date.end_date;
    // console.log('Getting Model:', dataModelData);
    dataModelData
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
