'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, TEXT } = Sequelize;
    await queryInterface.createTable('Blog_Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      blog_id: {
        allowNull: false,
        type: INTEGER
      },
      author_id: {
        allowNull: false,
        type: INTEGER
      },
      title: {
        allowNull: false,
        type: STRING
      },
      subtitle: {
        type: STRING
      },
      content: {
        allowNull: false,
        type: TEXT
      },
      slug: {
        allowNull: false,
        type: STRING
      },
      thumbnail: {
        type: STRING
      },
      header_photo: {
        type: STRING
      },
      read_time: {
        type: INTEGER
      },
      publish_date: {
        allowNull: false,
        type: DATE
      },
      created_at: {
        allowNull: false,
        type: DATE
      },
      updated_at: {
        allowNull: false,
        type: DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Blog_Posts');
  }
};