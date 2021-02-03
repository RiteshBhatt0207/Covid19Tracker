const users = require('./userModel.js');


exports.createUser = async (req, res) => {
    try {
        const existDoc = await users.find({ Mobile: req.body.Mobile });
        console.log(existDoc);
        if (existDoc.length > 0) {
            console.log(existDoc.length);
            res.status(400).json({
                status: 'Bad Request',
                data: "Duplicate mobile number"

            });
        }
        else {
            var input = req.body;

            const newUser = await users.create(req.body);

            console.log('create user');
            res.status(201).json({
                status: 'Success'
            });

        }
    }
    catch (err) {

        res.status(500).json({
            status: 'fail',
            meesage: err
        });

    }
}

exports.loginUser = async (req, res) => {
    try {
        const existDoc = await users.find({ Mobile: req.body.Mobile });
        console.log(existDoc);
        if (existDoc.length > 0) {
            console.log(existDoc.length);
            if (req.body.Password == existDoc[0].Password) {
                res.status(200).json({
                    status: 'OK',
                    data: "Login Successfully"
                });
            }
            else {
                res.status(401).json({
                    status: 'UnAuthorized',
                    data: "Invalid login details"
                });
            }
        }
        else {
            res.status(401).json({
                status: 'UnAuthorized',
                data: "Invalid login details"
            });
        }
    }
    catch (err) {

        res.status(500).json({
            status: 'fail',
            meesage: err
        });

    }
}