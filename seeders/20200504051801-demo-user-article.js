'use strict';
const { cnnFeed } = require('../mocks');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'UserArticles',
      cnnFeed.items.map((item, index) => ({
        userId: 1,
        articleId: index + 1,
        hasRead: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserArticles', null, {});
  },
};
