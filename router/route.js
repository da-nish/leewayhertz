const express = require('express');

const route = express.Router();

const controller = require('../controller/controller')

route.post('/set', controller.setRecord)
route.get('/get', controller.getRecord)

module.exports = route;