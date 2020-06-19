const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const Camp = require('./database/Camp.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => res.json('Hello World'));

app.get('/:id', (req, res) => {
  var campid = req.params.id;

  Camp.find({ id: campid }).exec((err, campsite) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(campsite);
    }
  });
});

module.exports = app;
