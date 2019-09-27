module.exports = (req, res, next) => {
    try{
        // const {"Authorization": authorization, "X-Cart-Body": cartToken} = req.headers;
        console.log(req.headers);
        res.send({
            message: "hello",
            // Authorization,
            // cartToken
        });
    }
    catch(err){
        next(err);
    }
}