const router = require('express').Router();
const apiRouter = require('./api');

// ALL methods /api
router.use('/api', apiRouter);

module.exports = router;
