const app = require('./app');
const db = require('./database/index.js');

let port = 2333;
app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});
