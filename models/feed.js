'use strict';

module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define(
    'feed',
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {}
  );
  Feed.associate = function (models) {
    // associations can be defined here
    Feed.belongsToMany(models.User, { through: 'UserFeeds' });
    Feed.hasMany(models.Article);
  };
  return Feed;
};
