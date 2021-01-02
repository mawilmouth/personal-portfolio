'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Blogs', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('Blogs', 'createdAt', 'created_at');
 },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Blogs', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('Blogs', 'created_at', 'createdAt');
 }
};