'use strict';
const { User, UserFeed } = require('.');

module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define(
    'Feed',
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {}
  );
  Feed.associate = function (models) {
    // associations can be defined here
    Feed.belongsToMany(models.User, { through: models.UserFeed });
  };
  return Feed;
};
