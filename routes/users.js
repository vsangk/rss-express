var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:userId/feeds', async function (req, res, next) {
  const user = await User.findByPk(req.params.userId);
  const feeds = await user.getFeeds();
  res.json(feeds);
});

module.exports = router;
