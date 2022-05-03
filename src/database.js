const { DATABASE_URL } = require('./config');
const { Client } = require('pg');

const db = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const connect = () => db.connect();

module.exports = {
  db,
  connect,
};
