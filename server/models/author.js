'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes;

  class Author extends Model {
    static associate({ Blog, Post }) {
      Author.belongsTo(Blog, {
        foreignKey: {
          name: 'id'
        }
      });

      Author.hasMany(Post, {
        foreignKey: {
          name: 'authorId'
        }
      });
    }

    fullName() {
      const { firstName, lastName } = this;

      return `${firstName} ${lastName}`;
    }
  };

  Author.init({
    firstName: STRING,
    lastName: STRING
  }, {
    sequelize,
    modelName: 'Author',
    tableName: 'authors'
  });

  return Author;
};