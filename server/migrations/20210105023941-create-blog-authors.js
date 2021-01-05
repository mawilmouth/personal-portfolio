'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('Blog_Authors', {
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
      first_name: {
        allowNull: false,
        type: STRING
      },
      last_name: {
        allowNull: false,
        type: STRING
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
    await queryInterface.dropTable('Blog_Authors');
  }
};