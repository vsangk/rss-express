'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserArticle = sequelize.define(
    'userArticle',
    {
      hasRead: DataTypes.BOOLEAN,
    },
    {}
  );
  UserArticle.associate = function (models) {
    // associations can be defined here
  };
  return UserArticle;
};
