const express = require('express');
const home = express();

home.get('/', (req, res) => {
    res.send('Hello world!');
});

module.exports = home;