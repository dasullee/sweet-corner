const db = require('../../../db');
const {imageUrl} = require('../../../helpers');

module.exports = async (req, res, next) => {
    const [results] = await db.query(`
            SELECT p.pid AS id, p.caption, p.cost, p.name, i.file, i.altText, i.type, i.pid AS imageId
            FROM products AS p 
            JOIN images AS i 
            ON i.productId=p.id 
            WHERE i.type="thumbnail"
            `);
    const products = results.map(p => {
        const {id, caption, cost, name, imageId, altText, file, type} = p;
        const product = {
            id,
            caption,
            cost,
            name,
            thumbnail: {
                id: imageId,
                altText,
                file,
                type,
                url: imageUrl(req, type, file)
            }
        };
        return product;
    });
    res.send({
        products: products
    });
};

