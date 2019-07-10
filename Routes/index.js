'use strict'

const express = require('express');
const bodyparser = require('body-parser')

const route = express.Router();

const transactions = require('./../api/transaction/')

route.use('/transactions', transactions)
route.use('/users', require('./../api/user'))

module.exports = route