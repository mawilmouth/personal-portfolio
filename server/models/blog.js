'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER } = DataTypes;

  class Blog extends Model {
    static associate({ User, Author, Post, Category }) {
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

      Blog.hasMany(Category, {
        foreignKey: {
          name: 'blogId'
        }
      });
    }
  };

  Blog.init({
    name: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    apiKey: STRING,
    ownerId: INTEGER
  }, {
    sequelize,
    modelName: 'Blog',
    tableName: 'blogs'
  });

  return Blog;
};