const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const commentRouts = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', blogPostRoutes);
router.use('./comments', commentRouts);

module.exports = router;
