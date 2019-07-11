'use strict'

const express = require('express');

const route = express.Router();
const controller = require('./transaction.controller');

route.get('/', controller.show)
route.post('/', controller.create)
route.delete('/:id', controller.destroy)

route.get('/transaction_one', controller.transactionOne)
route.get('/transaction_two', controller.transactionTwo)

module.exports = route
