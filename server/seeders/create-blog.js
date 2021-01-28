'use strict';

const userData = require('./data/user');
const blogData = require('./data/blog');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [userData]);

    const ownerRes = await queryInterface.sequelize.query(
      `SELECT id FROM users WHERE username = '${userData.username}' LIMIT 1`
    );

    await queryInterface.bulkInsert('blogs', [{
      ownerId: ownerRes[0][0].id,
      ...blogData
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});

    await queryInterface.bulkDelete('blogs', null, {});
  }
};
