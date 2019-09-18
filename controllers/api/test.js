module.exports = (req, res, next) => {
    res.send({
        message: 'This is a test route for our API',
        currentTime: new Date().toLocaleString()
    });
}