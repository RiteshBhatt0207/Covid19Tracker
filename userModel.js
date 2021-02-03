const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Mobile: {
        type: String
    },
    Password: {
        type: String
    }

});
const users = mongoose.model('users', userSchema);

function findByMobile(mobile) {
    Infos.find({ PrimaryMobileNumber: mobile }, function (err, docs) {
        console.log(docs);
    })
}

module.exports = users;