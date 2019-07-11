'use strict'

const express = require('express')
const route = express.Router()

const controller = require('./user.controller')

route.get('/',controller.show)
route.post('/',controller.create)
route.delete('/:id',controller.destroy)


module.exports= route