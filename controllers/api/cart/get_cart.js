const jwt = require('jwt-simple');
const {cartSecret} = require('../../../config/jwt_cart');
const {getCartTotals, imageUrl} = require('../../../helpers/index');
const db = require('../../../db');

module.exports = async (req, res, next) => {
    try{
        const cartToken = req.headers['x-cart-token'] || null;
        if(!cartToken){
            throw new StatusError(400, 'Missing cart token!');
        }
        const tokenData = jwt.decode(cartToken, cartSecret);
        const [results] = await db.query(
            `SELECT ci.pid AS cartId, ci.createdAt AS added, p.cost AS "each", ci.pid AS itemId, p.name AS name, p.pid AS productId, 
                ci.quantity AS quantity, i.altText AS altText, i.file AS file, (ci.quantity * p.cost) AS total 
                FROM cartItems AS ci 
                JOIN products AS p ON ci.productID=p.id 
                JOIN images AS i ON i.productId=ci.productID 
                WHERE cartId=? AND i.type="thumbnail"`
        ,[tokenData.cartId]);
        const total = await getCartTotals(tokenData.cartId);
        const items = [];
        let cartId = null;
        results.forEach(product => {
            const {cartId: cid, altText, file, ...item} = product;
            cartId = cid;
            items.push({
                ...item,
                thumbnail: {
                    altText,
                    url: imageUrl(req, "thumbnail", file)
                },
            })
        })
        res.send({
            cartId,
            items,
            total
        });
    }
    catch(err){
        next(err);
    }
}