const app = require('./app');

let port = 2333;
app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});
