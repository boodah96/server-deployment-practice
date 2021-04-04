'use strict';
const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
app.get('/', (req, res) => {
    res.send('WELCOM with Abdalrhman');
});

app.get('/bad', (req, res) => {
    throw new Error('we have an error some thing wrong');
});

function start(port) {
    app.listen(port, () => console.log(`listinig to PORT ${port}`));
}
// always should be after all the routes
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
    app: app,
    start: start,
};