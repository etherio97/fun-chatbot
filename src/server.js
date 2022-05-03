const express = require('express');
const webhook = require('./routes/webhook');
const { connect } = require('./database');
const { PORT } = require('./config');

const app = express();

app.use('/webhook', webhook);

connect().then(() => {
  app.listen(PORT, () => console.log('server is running on port', PORT));
});
