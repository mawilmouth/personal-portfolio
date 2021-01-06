require('dotenv').config();
const {
  DB_NAME: database,
  DB_HOST: host,
  DB_USERNAME: username,
  DB_PASSWORD: password
} = process.env;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres'
  },
  test: {
    username,
    password,
    database,
    host,
    dialect: 'postgres'
  },
  production: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    dialectOptions: { ssl: true },
    use_env_variable: "DATABASE_URL"
  }
};
