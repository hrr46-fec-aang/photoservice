const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const Camp = require('./database/Camp.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public/'));
app.use('/:id', express.static(path.resolve(__dirname + '/../public/')));

app.get('/site/:id', (req, res) => {
  var campid = req.params.id;
  Camp.find({ id: campid }).exec((err, campsite) => {
    if (err) {
      res.status(404).send('Failed to find campsite');
    } else {
      res.status(200).json(campsite);
    }
  });
});

app.put('/site/:id/:photoid/:liked', (req, res) => {
  var campid = req.params.id;
  var photoid = req.params.photoid;
  var liked = Number(req.params.liked);
  Camp.findOneAndUpdate(
    { id: campid, 'photos._id': photoid },
    { $inc: { 'photos.$.thumbs': liked } },
    {
      projection: { 'photos.$': 1 },
      returnOriginal: false,
    }
  ).exec((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      var thumbs = data.photos[0].thumbs + liked;
      res.status(200).json(thumbs);
    }
  });
});

app.get('/site/:id/:photoid/thumbs', (req, res) => {
  var campid = req.params.id;
  var photoid = req.params.photoid;
  Camp.find({ id: campid, 'photos._id': photoid }, { 'photos.$': 1 }).exec(
    (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        var thumbs = data[0].photos[0].thumbs;
        res.status(200).json(thumbs);
      }
    }
  );
});

module.exports = app;
