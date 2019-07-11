'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Int = require('mongoose-int32')
const Float = require('mongoose-float').loadType(mongoose)

const transactionSchema = new Schema({
    id: Int,
    merchant:String,
    amount:Float,
    date:Date,
    reflected:String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

const transactionModel = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModel;

