'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('categories', 'slug', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.addIndex('categories', {
      fields: ['slug']
    });

    await queryInterface.renameColumn('categories', 'title', 'name');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('categories', 'slug');

    await queryInterface.renameColumn('categories', 'name', 'title');
  }
};
