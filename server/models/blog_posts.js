const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const { STRING, DATE, TEXT, INTEGER} = DataTypes;

  class Blog_Posts extends Model {
    static associate(models) {}
  };

  Blog_Posts.init({
    blog_id: INTEGER,
    author_id: INTEGER,
    title: STRING,
    subtitle: STRING,
    slug: STRING,
    content: TEXT,
    thumbnail: STRING,
    header_photo: STRING,
    read_time: INTEGER,
    publish_date: DATE
  }, {
    sequelize,
    modelName: 'Blog_Posts',
  });

  return Blog_Posts;
};