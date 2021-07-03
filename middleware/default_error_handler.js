module.exports = (error, req, res, next) => {
    let status = 500;
    // TODO: Update to default error message (don't use error.message)
    const output = {
        errors: [error.message],
        message: `Bad ${req.method} Request`,
        success: false
    };
    if(error instanceof StatusError){
        status = error.code;
        output.errors = error.errors;
    }
    res.status(status).send(output);
}