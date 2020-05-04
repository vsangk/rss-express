'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Articles',
      [
        {
          feedId: 1,
          url:
            'https://www.reddit.com/r/worldnews/comments/fz56vm/livethread_11_global_covid19_pandemic/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  },
};
