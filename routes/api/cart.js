const router = require('express').Router();
const addItemToCart = require('../../controllers/api/cart/add_item');

// GET /api/cart -- get_cart.js

// GET /api/cart/totals -- cart_totals.js

// POST /api/cart/item/:product_id
router.post('/item/:product_id', addItemToCart);

module.exports = router;

