const fs = require('fs');

module.exports = (req, res, next) => {
    try {
        const {file, type} = req.params;

        const filePath = `${__rootdir}/client_assets/products/${type}/${file}`;

        if(!fs.existsSync(filePath)){
            throw new StatusError(404, 'Image not found!');
        }

        res.sendFile(filePath);
    }
    catch(err){
        next(err);
    }
}