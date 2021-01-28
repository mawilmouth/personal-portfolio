'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE } = Sequelize;

    await queryInterface.createTable('postsCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      postId: {
        allowNull: false,
        type: INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      categoryId: {
        allowNull: false,
        type: INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
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

    await queryInterface.addIndex('postsCategories', {
      fields: ['id']
    });

    await queryInterface.addIndex('postsCategories', {
      fields: ['postId']
    });

    await queryInterface.addIndex('postsCategories', {
      fields: ['categoryId']
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('postsCategories');
  }
};