const { Sequelize } = require('sequelize');

const {
  APP_ENV,
  DB_NAME,
  DB_HOST: host,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host,
  dialect: 'postgres',
  dialectOptions: {
    ssl: APP_ENV === 'production'
  }
});

module.exports = sequelize;