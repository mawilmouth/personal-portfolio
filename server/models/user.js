'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;
  
  class User extends Model {
    static associate(models) {}

    fullName() {
      const {firstName, lastName} = this;

      return `${firstName} ${lastName}`;
    }
  };

  User.init({
    firstName: STRING,
    lastName: STRING,
    username: STRING,
    email: STRING,
    password: STRING,
    authToken: STRING
  }, {
    sequelize,
    modelName: 'users',
  });

  return User;
};