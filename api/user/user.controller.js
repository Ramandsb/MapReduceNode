'use strict'
const User = require('./user.model');

exports.getUsers = (req,res,next) =>{
    res.send("getUsers")
}
exports.postUsers = (req,res,next) =>{

    const newUser = new User({
            name: req.body.name,
            id:req.body.id
        })

return newUser.save()
    .then((user) =>{
        res.status(200).send(user)
    })
}
exports.deleteUsers = (req,res,next) =>{
    res.send("deleteUsers")
}