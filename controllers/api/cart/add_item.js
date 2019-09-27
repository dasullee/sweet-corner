const db = require('../../../db');
const jwt = require('jwt-simple');
const {cartSecret} = require('../../../config/jwt_cart');

module.exports = async (req, res, next) => {
    try{
        let cartToken = req.headers['x-cart-token'] || null;
        const {product_id} = req.params;
        let cartId = null;

        // Validate product_id, is it a real product_id?
        const [[product=null]] = await db.execute('SELECT id FROM products WHERE pid=?', [product_id]);
        if (!product){
            throw new StatusError(404, `No product with ID: ${product_id} found!`);
        }

        // Need to check if user already has a cart
        if(!cartToken){
            // Create a cart 
            // Create a token for that cart
            const [[activeCartStatus = null]] = await db.query('SELECT id FROM cartStatuses WHERE mid="active"');
            if(!activeCartStatus){
                throw new StatusError(500, 'Error finding cart status');
            }

            const [newCartResult] = await db.query('INSERT INTO cart (pid, statusid) VALUES (UUID(), ?)', [activeCartStatus.id]);
            
            cartId = newCartResult.insertId;

            const tokenData = {
                cartId,
                ts: Date.now()
            };
            cartToken = jwt.encode(tokenData, cartSecret);
            // const [cart] = await db.query();

        } else {
            const tokenData = jwt.decode(cartToken, cartSecret);
            cartId = tokenData.cartId;
        }
        const [[existingItem = null]] = await db.query('SELECT id, quantity FROM cartItems WHERE productID=? AND cartId=?', [product.id, cartId]);
        console.log('existingitem', existingItem);
        if(!existingItem){
            const [addItemResult] = await db.execute('INSERT INTO cartItems (pid, cartId, productID, quantity) VALUES (UUID(),?,?,?)', [cartId, product.id, 1]);
            console.log(addItemResult);
            return res.send({
                cartId,
                cartToken,
                message: '1 cupcake added to cart'
            });
        } else{
            // Update existing item's quantity
            const [updateItemResult] = await db.execute('UPDATE cartItems SET quantity=?', [2]);
            console.log(updateItemResult);
            return res.send({
                cartId,
                cartToken,
                message: '2 cupcakes added to cart'
            });
        }
        // send back this object
        // {
        //     cartId:'',
        //     cartToken:'',
        //     message: '1 cupcake added to cart'
        // }
        
        // Does item exist in cart

        // If yes, increase the quantity

        // If no, add as new item cart

    
        res.send({
            message: 'Add item to cart',
            product_id,
            cartToken,
            cartId
        })
    }
    catch(err){
        next(err);
    }
}
