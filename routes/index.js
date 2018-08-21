const Router = require('koa-router');
const router = new Router();
const {
  Card,
  User,
  Author,
  Posts
} = require('../controllers');
const isAuthenticated = require('../policies/isAuthenticated');


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
router.get('/cards/:id', Card.findOne);
// To be protected Routes
router.post('/card', Card.create);

// Public Routes
router.get('/posts-public', Posts.findPublic);


router.get('/post/:id', Posts.findOne);

// To be protected Routes
router.get('/posts', isAuthenticated, Posts.findAuthorPosts);
router.post('/post', Posts.create);
router.put('/post/:id', Posts.update);

router.delete('/post/:id', Posts.destroy);



module.exports = router;