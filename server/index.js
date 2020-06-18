const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => res.send('Hello World'));

let port = 2333;
app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});
