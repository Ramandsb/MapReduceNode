'use strict'

const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./Routes')
const mongoose = require('mongoose');

const dburl = 'mongodb+srv://dbadmin:dbpassword@cluster0-h310t.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dburl, { useNewUrlParser: true }, function(err){
        if(err)
            console.log('error in connecting db', err);

        console.log('Successfully connected');
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', routes);

app.listen(3000, function(err){
    if(err)
        console.log(err)
    console.log('listenting')
})
