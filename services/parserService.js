const Parser = require('rss-parser');
const { Feed, Article, User } = require('../models');

const parser = new Parser({
  customFields: {
    item: [['id', 'guid']],
  },
});

const parseRss = async (feedUrl) => {
  const parsed = await parser.parseURL(feedUrl);

  // TESTING
  const reddit = await parser.parseURL(
    'https://www.reddit.com/r/worldnews/.rss'
  );
  const kent = await parser.parseURL('https://kentcdodds.com/blog/rss.xml');
  const cnn = await parser.parseURL(
    'http://rss.cnn.com/rss/cnn_topstories.rss'
  );
  // TESTING

  return parsed;
};

const getRssItems = async (feedUrl) => {
  const parsed = await parseRss(feedUrl);
  return parsed.items;
};

const persistArticles = async (feedUrl) => {
  const parsed = await parser.parseURL(feedUrl);
  const feed = await Feed.findOne({ where: { url: feedUrl } });
  const items = parsed.items.map((item) => ({
    feedId: feed.id,
    url: item.link,
  }));
  await Article.bulkCreate(items);
};

const persistUserArticles = async (userId, feedUrl) => {
  const user = await User.findByPk(userId);
  const feed = await Feed.findOne({ where: { url: feedUrl } });
  const articles = await feed.getArticles();
  await user.addArticles(articles);
};

module.exports = {
  parseRss,
  persistArticles,
  persistUserArticles,
};
