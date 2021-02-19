'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;

  class Category extends Model {
    static associate({ Blog, Post }) {
      Category.belongsTo(Blog, {
        foreignKey: {
          name: 'id'
        }
      });

      Category.hasMany(Post, {
        foreignKey: {
          name: 'categoryId'
        }
      });
    }
  };

  Category.init({
    slug: {
      type: STRING,
      allowNull: false,
      unique: true,
      validates: {
        notEmpty: true,
        notNull: true
      }
    },
    name: {
      type: STRING,
      allowNull: false,
      validates: {
        notEmpty: true,
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
  });
  
  return Category;
};