require('dotenv').config()

module.exports = {
  'development': {
    'host': process.env.DB_HOST,
    'port': process.env.DB_PORT,
    'database': process.env.DB_SCHEMA,
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'timezone': process.env.DB_TIMEZONE,
    'dialect': 'mysql',
    'define': {
      'freezeTableName': true,
      'underscored': true,
    },
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    'host': process.env.DB_HOST,
    'port': process.env.DB_PORT,
    'database': process.env.DB_SCHEMA,
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'timezone': process.env.DB_TIMEZONE,
    'dialect': 'mysql',
    'logging': false,
    'define': {
      'freezeTableName': true,
      'underscored': true,
    },
  }
}
