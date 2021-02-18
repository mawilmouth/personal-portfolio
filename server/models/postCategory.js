'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { INTEGER } = DataTypes;

  class PostCategory extends Model {
    static associate(models) {}
  };

  PostCategory.init({
    postId: INTEGER,
    categoryId: INTEGER
  }, {
    sequelize,
    modelName: 'PostCategory',
    tableName: 'postCategories'
  });

  return PostCategory;
};