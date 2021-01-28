'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING, TEXT } = DataTypes;

  class Post extends Model {
    static associate(models) {}
  };

  Post.init({
    slug: STRING,
    title: STRING,
    subtitle: STRING,
    content: TEXT,
    releaseDate: STRING
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};