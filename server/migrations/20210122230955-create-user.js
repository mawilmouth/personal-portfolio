'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;

    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      firstName: {
        type: STRING,
        allowNull: false
      },
      lastName: {
        type: STRING,
        allowNull: false
      },
      username: {
        type: STRING,
        allowNull: false
      },
      email: {
        type: STRING,
        allowNull: false
      },
      password: {
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

    await queryInterface.addIndex('users', {
      fields: ['id']
    });

    await queryInterface.addIndex('users', {
      fields: ['username']
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};