'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER } = DataTypes;

  class Blog extends Model {
    static associate({ User, Author, Post }) {
      Blog.belongsTo(User, {
        foreignKey: {
          name: 'id'
        }
      });

      Blog.hasMany(Author, {
        foreignKey: {
          name: 'blogId'
        }
      });

      Blog.hasMany(Post, {
        foreignKey: {
          name: 'blogId'
        }
      });
    }
  };

  Blog.init({
    name: STRING,
    ownerId: INTEGER,
    apiKey: STRING
  }, {
    sequelize,
    modelName: 'Blog',
    tableName: 'blogs'
  });

  return Blog;
};