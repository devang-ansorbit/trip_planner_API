var dataService = require('../service/dataService');

var getData = async (req, res) => {
  var result = await dataService.getDataFromDBService();
  res.send({
    status: true,
    data: result,
  });
};

var createData = async (req, res) => {
  var result = await dataService.createDataInDBService(req.body);
  if (result) {
    res.send({ status: true, message: 'User Added Successfully' });
  } else {
    res.send({ status: false, message: 'Error creating in user adding' });
  }
};

var getOneDataById = async (req, res) => {
  console.log(req.params.id);
  var result = await dataService.getOneDataById(req.params.id);
  console.log('Getting reasdult from:', result);
  res.send({ status: true, data: result });
};

module.exports = { getData, createData, getOneDataById };
