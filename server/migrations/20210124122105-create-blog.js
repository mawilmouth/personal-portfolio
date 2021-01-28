'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;

    await queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      ownerId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      name: {
        type: STRING,
        allowNull: false
      },
      apiKey: {
        type: STRING
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

    await queryInterface.addIndex('blogs', {
      fields: ['id']
    });

    await queryInterface.addIndex('blogs', {
      fields: ['apiKey']
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blogs');
  }
};