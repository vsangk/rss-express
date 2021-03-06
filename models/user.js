'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Feed, { through: 'UserFeeds' });
    User.belongsToMany(models.Article, { through: models.UserArticle });
  };
  return User;
};
