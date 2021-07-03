const router = require('express').Router();
const addItemToCart = require('../../controllers/api/cart/add_item');
const getCartTotal = require('../../controllers/api/cart/cart_totals');
const getCart = require('../../controllers/api/cart/get_cart');

// GET /api/cart -- get_cart.js
router.get('/', getCart);

// GET /api/cart/totals -- cart_totals.js
router.get('/totals', getCartTotal);

// POST /api/cart/items/:product_id
router.post('/items/:product_id', addItemToCart);

module.exports = router;

