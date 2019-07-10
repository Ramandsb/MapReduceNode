'use strict'

const mongoose = require('mongoose')
const Int = require('mongoose-int32')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Int,
    name:String
})


const model = mongoose.model('Users',userSchema)

module.exports = model;