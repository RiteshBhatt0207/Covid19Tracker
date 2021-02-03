const express = require('express');
const app = require('./info.js');
const mongoose = require('mongoose');
const Infos = require('./infoModel.js');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
//app.use(express.static('Html'));

mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Database Connected'));
//const importData = require('./import-dev-data.js');
const port = process.env.port || 8080;
app.listen(port, () => {

    console.log('app is listening..');
});
