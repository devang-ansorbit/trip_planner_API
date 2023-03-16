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

module.exports.getOneDataById = (id) => {
  return new Promise((resolve, reject) => {
    dataModel
      .findById(id)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
