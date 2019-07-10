'use strict'

const express = require('express');

const route = express.Router();
const controller = require('./transaction.controller');

route.get('/', controller.showAll)
route.post('/', controller.create)
route.delete('/', controller.destroy)

module.exports = route
