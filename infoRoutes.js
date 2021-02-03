const express = require('express');

const infoController = require('./infoController.js');
const userController = require('./userController.js');
const router = express.Router();
router
    .route('/info')
    .get(infoController.getAllInfo)
    .post(infoController.createInfo)
    .patch(infoController.updateInfo);
router
    .route('/info/:id')
    .get(infoController.getInfo)

    .delete(infoController.deleteInfo);
router
    .route('/info/getdata/:mobile')
    .get(infoController.getInfoByMobile);
router
    .route('/user')
    .post(userController.createUser);
router
    .route('/user/login')
    .post(userController.loginUser);






module.exports = router;