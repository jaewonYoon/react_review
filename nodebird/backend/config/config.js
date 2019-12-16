const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  "development": {
    "username": "bunggl",
    "password": process.env.DB_PASSWORD,
    "database": "react_nodebird",
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "bunggl",
    "password": process.env.DB_PASSWORD,
    "database": "database_test",
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "bunggl",
    "password": process.env.DB_PASSWORD,
    "database": "react_nodebird",
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
