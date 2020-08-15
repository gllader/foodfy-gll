const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  user: 'gll',
  password: 'gll',
  port: '5432',
  database: 'foodfy'
});

