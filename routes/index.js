const router = require('express').Router();
const apiRouter = require('./api');
const imagesRouter = require('./images');

// ALL methods /api
router.use('/api', apiRouter);

// ALL methods /images

router.use('/images', imagesRouter);
module.exports = router;
