const express = require('express');
const infoRouter = require('./infoRoutes.js');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/api', infoRouter);

module.exports = app;