'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;
  
  class User extends Model {
    static associate(models) {}
  };

  User.init({
    firstName: STRING,
    lastName: STRING,
    username: STRING,
    email: STRING,
    password: STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};