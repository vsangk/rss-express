var express = require('express');
var router = express.Router();
const { Feed, User, UserArticle } = require('../models');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.findAll();
  res.json(users);
});

router.post('/', async function (req, res, next) {
  const user = await User.create(req.body);
  res.json(user);
});

router.get('/:userId/feeds', async function (req, res, next) {
  const user = await User.findByPk(req.params.userId);
  const feeds = await user.getFeeds();
  res.json(feeds);
});

router.post('/:userId/feeds', async function (req, res, next) {
  const feed = await Feed.findByPk(req.body.feedId);
  const user = await User.findByPk(req.params.userId);
  user.addFeed(feed);
  res.json(user);
});

router.get('/:userId/articles', async function (req, res, next) {
  const user = await User.findByPk(req.params.userId);
  const feeds = await user.getArticles();
  res.json(feeds);
});

router.put('/:userId/articles/:articleId', async function (req, res, next) {
  const userArticle = await UserArticle.findOne({
    where: {
      userId: req.params.userId,
      articleId: req.params.articleId,
    },
  });

  const updated = await userArticle.update({ hasRead: req.body.hasRead });
  res.json(updated);
});

module.exports = router;
