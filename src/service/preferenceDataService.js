var preferenceDataSchema = require("../model/preference_data");

module.exports.getDataFromDBService = () => {
  return new Promise((resolve, reject) => {
    preferenceDataSchema
      .find({})
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.createDataFromDBService = (data) => {
  return new Promise((resolve, reject) => {
    var pereferenceDataModel = new preferenceDataSchema({ ...data });
    pereferenceDataModel
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
    preferenceDataSchema
      .findById(id)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
