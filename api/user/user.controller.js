'use strict'
const User = require('./user.model');

exports.show = (req, res, next) => {
    return User.find()
        .then(user => {
            res.send(user).status(200)
        })
        .catch(function (err) {
            res.status(500).send({ error: err })
        })
}

exports.create = (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        id: req.body.id
    })

    return newUser.save()
        .then(user => {
            res.status(200).send(user)
        })
        .catch(function (err) {
            res.status(500).send({ error: err })
        })
}

exports.destroy = (req, res, next) => {
    return User.findByIdAndDelete(req.params.id)
        .then(user => {
            if (user) {
                res.send({ message: 'success' }).status(201)
            } else {
                res.status(500).send({ message: 'Record not found' })
            }
        })
        .catch(function (err) {
            res.status(500).send({ error: err })
        })
}