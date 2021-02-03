const fs = require('fs');
const mongoose = require('mongoose');
const Infos = require('./infoModel.js');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });


mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('database'));

const info = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const importData = async () => {
    await Infos.create(info);
    console.log('Data successfully loaded:');
}
if (process.argv[2] == '--import') {
    importData();
}