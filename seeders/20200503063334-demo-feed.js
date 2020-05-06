'use strict';
const { cnnFeed } = require('../mocks');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Feeds',
      [
        {
          title: cnnFeed.title,
          description: cnnFeed.description,
          url: cnnFeed.link,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Feeds', null, {});
  },
};
