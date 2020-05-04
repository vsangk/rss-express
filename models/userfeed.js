'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFeed = sequelize.define(
    'userFeed',
    {
      userId: DataTypes.INTEGER,
      feedId: DataTypes.INTEGER,
    },
    {}
  );
  UserFeed.associate = function (models) {
    // associations can be defined here
  };
  return UserFeed;
};
