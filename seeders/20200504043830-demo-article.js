'use strict';
const { cnnFeed } = require('../mocks');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Articles',
      cnnFeed.items.map((item) => ({
        feedId: 1,
        title: item.title,
        url: item.link,
        pubDate: item.pubDate,
        guid: item.guid,
        content: item.content,
        contentSnippet: item.contentSnippet,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  },
};
