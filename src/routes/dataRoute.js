var express = require('express');

var router = express.Router();

var dataController = require('../controller/dataController');

router.route('/').get(dataController.getData);

router.route('/post-data').post(dataController.createData);

module.exports = router;
