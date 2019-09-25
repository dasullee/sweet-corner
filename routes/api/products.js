const router = require('express').Router();
const getAll = require('../../controllers/api/products/get_all');
const getDetails = require('../../controllers/api/products/get_details');

// GET /api/products 
router.get('/', getAll);

// GET /api/products/:product_id
router.get('/:product_id', getDetails);

module.exports = router;
