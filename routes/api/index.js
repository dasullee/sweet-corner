const router = require('express').Router();
const testController = require('../../controllers/api/test');

router.get('/test', testController);

module.exports = router;
