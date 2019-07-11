'use strict'
const Transaction = require('./transaction.model')

exports.show = (req, res, next)=>{
    return Transaction.find().then((transaction)=>{
        res.send(transaction);
    })
    .catch(err=>{
        res.status(500).send({ error: err })
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
    .catch(function(err){
        res.status(500).send({ error: err })
    })
}

exports.destroy = (req,res, next)=>{
    return Transaction.findByIdAndDelete(req.params.id)
        .then(function(transaction){
            if(transaction){
                res.send({'message': 'success'}).status(201)
            }else{
                res.status(500).send({ error: 'Record not available!' })
            }
        })
        .catch(function(err){
            res.status(500).send({ error: err })
        })
}

exports.transactionOne = (req,res,next)=>{
    return Transaction.aggregate( [{ "$group": { _id : '$merchant', 'count': {'$sum' : 1} } } ]).then(transaction=>{
        let result = {};
        transaction.map(t=>{
            result[t._id] = t.count;
        })
        res.send(result)
    })
    .catch(function(err){
        res.status(500).send({ error: err })
    })

} 

exports.transactionTwo = (req,res,next)=>{
    return Transaction.aggregate([{
        $group: { _id: { user_id: '$user_id', reflected : '$reflected' }, count: { '$sum': 1} } },
        {
        $group: { _id: '$_id.user_id', reflection: { $push: { reflected : '$_id.reflected', count: "$count" }} }
    }])
    .then((transaction)=>{
        res.send(transaction);
    })
    .catch(err=>{
        res.status(500).send({ error: err })
    })

} 

/* db.testCollection.aggregate([{
    $group: {
        _id: {
            ASSIGN_ID: "$ASSIGN_ID",
            STATUS: "$STATUS"
        },
        count: {
            "$sum": 1
        }
    }
}, {
    $group: {
        _id: "$_id.ASSIGN_ID",
        STATUS_GROUP: {
            $push: {
                STATUS: "$_id.STATUS",
                count: "$count"
            }
        }
    }
}]) */