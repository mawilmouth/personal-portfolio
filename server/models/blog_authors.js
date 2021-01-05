const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { INTEGER, STRING } = DataTypes;

  class Blog_Authors extends Model {
    static associate(models) {}
  };

  Blog_Authors.init({
    blog_id: INTEGER,
    first_name: STRING,
    last_name: STRING
  }, {
    sequelize,
    modelName: 'Blog_Authors',
  });

  return Blog_Authors;
};