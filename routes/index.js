const Router = require('koa-router');
const router = new Router();
const {
  Card,
  User,
  Author,
  Posts
} = require('../controllers');

// User Routes
router.post('/signup', User.create);
      // .get('/login', User.login);

router.post('/login', User.login);
      // .get('/cms', Card.find);

// Author Routes
router.post('/signup', Author.create);
      // .get('/login', User.login);

router.post('/login', Author.login);
      // .get('/cms', Card.find);

// Card Routes
router.get('/cards', Card.find);
// To be protected Routes
router.post('/card', Card.create);

// Post Routes
router.get('/posts', Posts.find);
// To be protected Routes
router.post('/post', Posts.create);

module.exports = router;