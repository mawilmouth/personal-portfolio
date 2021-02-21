'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('authors', {
      fields: ['firstName', 'lastName']
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('authors', {
      fields: ['firstName', 'lastName']
    });
  }
};
