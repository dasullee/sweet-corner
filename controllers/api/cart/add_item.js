module.exports = (req, res, next) => {
    const {product_id} = req.params;
    try{
        res.send({
            message: 'Add item to cart',
            product_id
        })
    }
    catch(err){
        next(err);
    }
}

// TODO HOMEWORK:
// setup endpoints
// do /api/cart (get shopping cart)
// do /api/cart/totals