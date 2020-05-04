var express = require('express');
var router = express.Router();
const { Article } = require('../models');

router.get('/', async function (req, res, next) {
  const articles = await Article.findAll();
  res.json(articles);
});

router.post('/', async function (req, res, next) {
  const article = await Article.create(req.body);
  res.json(article);
});

module.exports = router;
