var dataService = require('../service/dataService');

var getData = async (req, res) => {
  var data = await dataService.getDataFromDBService();
  res.send({
    status: true,
    data: data,
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

module.exports = { getData, createData };
