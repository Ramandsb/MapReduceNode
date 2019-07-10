'use strict'

const express = require('express')
const route = express.Router()

const controller = require('./user.controller')

route.get('/',controller.getUsers)
route.post('/',controller.postUsers)
route.delete('/',controller.deleteUsers)


module.exports= route