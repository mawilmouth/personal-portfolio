'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;

    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      blogId: {
        allowNull: false,
        type: INTEGER,
        references: {
          model: 'blogs',
          id: 'id'
        }
      },
      authorId: {
        allowNull: false,
        type: INTEGER,
        references: {
          model: 'authors',
          key: 'id'
        }
      },
      slug: {
        type: STRING,
        allowNull: false
      },
      title: {
        type: STRING,
        allowNull: false
      },
      subtitle: {
        type: STRING
      },
      content: {
        type: TEXT,
        allowNull: false
      },
      releaseDate: {
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

    await queryInterface.addIndex('posts', {
      fields: ['id']
    });

    await queryInterface.addIndex('posts', {
      fields: ['slug']
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};