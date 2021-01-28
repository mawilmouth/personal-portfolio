'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;

  class Blog extends Model {

    static associate(models) {}
  };

  Blog.init({
    name: STRING,
    apiKey: STRING
  }, {
    sequelize,
    modelName: 'Blog',
  });

  return Blog;
};