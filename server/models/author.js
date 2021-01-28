'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;

  class Author extends Model {
    static associate(models) {}
  };

  Author.init({
    firstName: STRING,
    lastName: STRING
  }, {
    sequelize,
    modelName: 'Author',
  });

  return Author;
};