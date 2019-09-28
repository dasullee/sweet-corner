const {getCartTotals} = require('../../../helpers');
const jwt = require('jwt-simple');
const {cartSecret} = require('../../../config/jwt_cart');
const db = require('../../../db');

module.exports = async (req, res, next) => {
    try{
        const cartToken = req.headers['x-cart-token'] || null;
        if(!cartToken){
            throw new StatusError(400, 'Missing cart token!');
        }
        const tokenData = jwt.decode(cartToken, cartSecret);
        const total = await getCartTotals(tokenData.cartId);
        res.send({
            total
        });
    }
    catch(err){
        next(err);
    }
}