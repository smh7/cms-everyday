require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "cms_api",
    "host": process.env.DB_HOSTNAME,
    "dialect": "mysql",
    "secret" : process.env.SECRET
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "coms_api",
    "host": process.env.DB_HOSTNAME,
    "dialect": "mysql",
    "secret" : process.env.SECRET
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "cms_api",
    "host": process.env.DB_HOSTNAME,
    "dialect": "mysql",
    "secret" : process.env.SECRET
  }
}
