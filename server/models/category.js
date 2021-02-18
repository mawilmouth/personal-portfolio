'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;

  class Category extends Model {
    static associate(models) {}
  };

  Category.init({
    title: STRING
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
  });
  
  return Category;
};