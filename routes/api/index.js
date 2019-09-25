const router = require('express').Router();
const testController = require('../../controllers/api/test');
const productsRouter = require('./products');
const cartRouter = require('./cart');

// GET /api/test
router.get('/test', testController);

// ALL methods /api/products 
router.use('/products', productsRouter);

// ALL methods /api/cart
router.use('/cart', cartRouter);

module.exports = router;
