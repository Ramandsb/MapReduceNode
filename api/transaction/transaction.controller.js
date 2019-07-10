'use strict'
const Transaction = require('./transaction.model')



exports.showAll = (req, res, next)=>{
    return Transaction.find().distinct('merchant').count().then((transaction)=>{
        console.log(transaction);
        res.send({'count': transaction});
    })
    .catch(err=>{
        console.log(err);
    })
    
}

exports.create = (req,res, next)=>{
    const newTransaction = new Transaction({
        id: req.body.id,
        merchant:req.body.merchant,
        amount:req.body.amount,
        date:req.body.date,
        reflected:req.body.reflected,
        user_id:req.body.user_id
    })
    return newTransaction.save().then((transaction)=>{
        res.status(200).send(transaction);
    })
}

exports.destroy = (req,res, next)=>{
    res.send('destroy');
}