const { Sequelize } = require('sequelize');

const {
  APP_ENV,
  DB_NAME,
  DB_HOST: host,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;

const isProduction = APP_ENV === 'production';
let dialectOptions = {};

if (isProduction) {
  Object.assign(dialectOptions, {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  });
}

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host,
  dialect: 'postgres',
  dialectOptions
});

module.exports = sequelize;