var express = require('express');

var router = express.Router();

var dataController = require('../controller/dataController');
var prefrenceDataController = require('../controller/prefrenceDataController');

router.route('/').get(dataController.getData);

router.route('/post-data').post(dataController.createData);

router.route('/list-data/:id').get(dataController.getOneDataById);

router.route('/prefrence-data').get(prefrenceDataController.getData);

router.route('/prefrence-data/create-data').post(prefrenceDataController.createData);


module.exports = router;
