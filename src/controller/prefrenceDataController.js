var preferenceDataService = require('../service/preferenceDataService');

var getData = async (req, res) => {
    var result = await preferenceDataService.getDataFromDBService();
    if(result){
        res.send({
            status : true,
            data : result
        })
    }
}

var createData = async (req, res) => {
    var result = await preferenceDataService.createDataFromDBService(req.body);
    if(result) {
        res.send({
            status : true,
            message : 'Person is Added Succefully'
        })
    } else {
        res.send({
            status : false,
            message : 'Error for creating new data'
        })
    }
}

module.exports = { getData, createData }