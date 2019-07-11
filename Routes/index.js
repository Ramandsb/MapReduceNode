'use strict'

const express = require('express');
const bodyparser = require('body-parser')

const route = express.Router();

route.use('/transactions', require('./../api/transaction/'))
route.use('/users', require('./../api/user'))

module.exports = route