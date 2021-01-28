'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;

    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      blogId: {
        allowNull: false,
        type: INTEGER,
        references: {
          model: 'blogs',
          key: 'id'
        }
      },
      title: {
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

    await queryInterface.addIndex('categories', {
      fields: ['id']
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};