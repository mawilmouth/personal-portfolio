'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Blog_Authors', [{
      blog_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Blog_Authors', null, {});
  }
};
