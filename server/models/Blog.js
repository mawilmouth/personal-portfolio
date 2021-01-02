const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {}
  };

  Blog.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Blog',
  });
  
  return Blog;
};