'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'article',
    {
      url: DataTypes.STRING,
    },
    {}
  );
  Article.associate = function (models) {
    // associations can be defined here
    Article.belongsTo(models.Feed);
    Article.belongsToMany(models.User, { through: models.UserArticle });
  };
  return Article;
};
