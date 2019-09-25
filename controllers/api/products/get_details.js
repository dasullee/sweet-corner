const db = require('../../../db');
const {imageUrl} = require('../../../helpers');

module.exports = async (req, res, next) => {
    const {product_id} = req.params;

    const [results] = await db.execute(`
        SELECT p.pid AS id, p.caption, p.cost, p.description, p.name, i.pid AS imageId, i.altText, i.file, i.type
        FROM products AS p
        JOIN images AS i
        ON p.id=i.productId
        WHERE p.pid=?`
        , [product_id]);
    let product = {};  
    results.forEach(p => {
        const {altText, file, type, imageId: id, ...rest} = p;

        product = {
            ...product,
            ...rest,
            [type.indexOf('_')!== -1 ? type.split('_')[1] : type]: {
                id,
                altText,
                file,
                type: type + "s",
                URL: imageUrl(req, type, file)
            }
        }
    });
    res.send(product);
}