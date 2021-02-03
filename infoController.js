const Infos = require('./infoModel.js');
exports.getAllInfo = async (req, res) => {
    try {
        const info = await Infos.find();
        res.status(200).json
            ({
                status: 'success',
                result: info.length,
                data:
                {
                    info
                }
            });
    }
    catch (err) {
        res.status(404).json
            ({
                status: 'fail',
                meesage: err
            });
    }
}
exports.getInfo = async (req, res) => {
    try {
        //const id = req.params.id * 1;
        //const infos = info.find(el => el.id == id);
        const info = await Infos.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            result: info.length,
            data: {
                info
            }
        });
    }
    catch (err) {
        res.status(404).json
            ({
                status: 'fail',
                meesage: 'Data not found'
            });

    }
}
exports.createInfo = async (req, res) => {
    try {
        const existDoc = await Infos.find({ PrimaryMobileNumber: req.body.PrimaryMobileNumber });

        if (existDoc.length > 0) {
            console.log(existDoc.length);
            res.status(400).json({
                status: 'Bad Request',
                data: "Duplicate mobile number"

            });
        }
        else {
            var input = req.body;
            input.status = "ACTIVE";
            const newInfo = await Infos.create(req.body);

            console.log('create info');
            res.status(201).json({
                status: 'Success',
                data: {
                    info: newInfo
                }
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
exports.updateInfo = async (req, res) => {
    try {
        const info = await Infos.findOneAndUpdate(req.body.PrimaryMobileNumber, req.body, { new: true, runValidators: true });
        res.status(200).json({
            status: 'success',

            data: {
                info: 'updated...'
            }
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            meesage: err
        });
    }
}
exports.deleteInfo = async (req, res) => {
    try {
        await Infos.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            meesage: err
        });
    }
}
exports.getInfoByMobile = async (req, res) => {
    try {
        await Infos.find({ PrimaryMobileNumber: req.params.mobile }, function (err, docs) {
            res.status(200).json({
                status: 'success',
                result: docs.length,
                data: {
                    docs
                }
            });
        });
    }
    catch (err) {
        res.status(404).json
            ({
                status: 'fail',
                meesage: err
            });


    }
}