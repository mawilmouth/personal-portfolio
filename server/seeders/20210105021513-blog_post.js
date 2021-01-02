'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Blog_Posts', [{
      blog_id: 1,
      author_id: 1,
      title: 'seeded post one',
      subtitle: 'this is post one',
      content: 'post one content',
      slug: 'seeded-post-one',
      thumbnail: '/images/test-img.jpg',
      header_photo: '/images/test-img.jpg',
      read_time: 10,
      publish_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Blog_Posts', null, {});
  }
};
