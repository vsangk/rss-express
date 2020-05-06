const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { sequelize } = require('./models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const feedsRouter = require('./routes/feeds');
const articlesRouter = require('./routes/articles');
const { parseRss, persistUserArticles } = require('./services/parserService');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feeds', feedsRouter);
app.use('/articles', articlesRouter);

// persistArticles('https://www.reddit.com/r/worldnews/.rss');
// persistUserArticles(1, 'https://www.reddit.com/r/worldnews/.rss');

parseRss('https://kentcdodds.com/blog/rss.xml');

module.exports = app;
