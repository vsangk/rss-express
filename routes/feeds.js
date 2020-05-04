var express = require('express');
var router = express.Router();
const { Feed } = require('../models');

router.get('/', async function (req, res, next) {
  const feeds = await Feed.findAll();
  res.json(feeds);
});

router.post('/', async function (req, res, next) {
  const feed = await Feed.create(req.body);
  res.json(feed);
});

router.get('/:feedId/users', async function (req, res, next) {
  const feed = await Feed.findByPk(req.params.feedId);
  const users = await feed.getUsers();
  res.json(users);
});

module.exports = router;
