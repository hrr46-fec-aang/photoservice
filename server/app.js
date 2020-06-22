const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const Camp = require('./database/Camp.js');
const db = require('./database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/:id', express.static(path.resolve(__dirname + '/../public')));

app.get('/site/:id', (req, res) => {
  var campid = req.params.id;
  Camp.find({ id: campid }).exec((err, campsite) => {
    if (err) {
      res.status(404).send({ 'database-error': err });
    } else {
      res.status(200).json(campsite);
    }
  });
});

module.exports = app;
