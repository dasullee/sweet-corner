const router = require('express').Router();
const getByFilename = require('../../controllers/images/get_by_filename');

// Routes for /images


// /images/:type/:file
router.get('/:type/:file', getByFilename);

module.exports = router;
