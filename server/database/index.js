const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/campsite';

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

module.exports = db;
