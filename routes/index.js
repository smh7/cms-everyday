const Router = require('koa-router');
const router = new Router();
const {
  Card,
  User,
  Author,
  Posts
} = require('../controllers');

// User Routes
router.post('/signup-cms', User.create);
      // .get('/login', User.login);

router.post('/login-cms', User.login);
      // .get('/cms', Card.find);

// Author Routes
router.post('/signup-everyday', Author.create);
      // .get('/login-everyday', Author.login);

router.post('/login-everyday', Author.login);
      // .get('/cms', Card.find);

// Card Routes
router.get('/cards', Card.find);
// To be protected Routes
router.post('/card', Card.create);

// Post Routes
router.get('/posts', Posts.find);
// To be protected Routes
router.post('/post', Posts.create);

router.delete('/post/:id', Posts.destroy);



module.exports = router;