exports.imageUrl = function(req, type, file) {
    return `${req.protocol}://${req.get('host')}/images/${type}s/${file}`;
}