const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const editorRoutes = require('./editorRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/edit',editorRoutes);

module.exports = router;
