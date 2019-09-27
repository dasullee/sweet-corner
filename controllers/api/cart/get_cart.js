module.exports = (req, res, next) => {
    try{
        res.send({
            message: "Test for get cart"
        });
    }
    catch(err){
        next(err);
    }
}