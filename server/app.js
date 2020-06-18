const express = require('express');
const morgan = require('morgan');

const Photo = require('./database/photo.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => res.json('Hello World'));

module.exports = app;
