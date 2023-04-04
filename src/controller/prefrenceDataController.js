const { rmSync } = require('fs');
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

var getDataById = async ( req, res ) => {
    var result = await preferenceDataService.getOneDataById(req.params.id);
    if(result) {
        res.send({
            status : true,
            data : result
        })
    }
}

var updateData = async (req, res) => {
    var result = await preferenceDataService.updateDataById(req.params.id, req.body);

    if(result) {
        res.send({
            status: true,
            message : 'Data is updated succesfully.'
        })
    } else {
        res.send({
            status: false,
            message : 'Data is not updated'
        })
    }
}

var deleteData = async (req, res) => {
    var result = await preferenceDataService.deleteDataById(req.params.id);

    if(result){
        res.send({
            status : true,
            message: 'Data is deleted succesfully'
        })
    } else {
        res.send({
            status : false,
            message : 'Data is not deleted'
        })
    }
}

module.exports = { getData, createData, getDataById, updateData, deleteData}