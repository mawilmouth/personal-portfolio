'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING, TEXT, BOOLEAN } = DataTypes;

  class Post extends Model {
    static associate({ Blog, Author }) {
      Post.belongsTo(Blog, {
        foreignKey: {
          name: 'id'
        }
      });

      Post.belongsTo(Author, {
        foreignKey: {
          name: 'id'
        }
      });
    }
  };

  Post.init({
    slug: {
      type: STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    title: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    subtitle: STRING,
    draft: BOOLEAN,
    content: {
      type: TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    releaseDate: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        isDate: true
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });

  return Post;
};