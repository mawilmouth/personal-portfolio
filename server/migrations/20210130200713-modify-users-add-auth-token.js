'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'authToken', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addIndex('users', {
      fields: ['authToken']
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'authToken');
  }
};
