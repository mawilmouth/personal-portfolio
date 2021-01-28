'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;

    await queryInterface.createTable('authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      blogId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'blogs',
          key: 'id'
        }
      },
      firstName: {
        type: STRING,
        allowNull: false
      },
      lastName: {
        type: STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });

    await queryInterface.addIndex('authors', {
      fields: ['id']
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('authors');
  }
};