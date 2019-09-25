module.exports = class StatusError extends Error {
    constructor(code=500, message='Internal Server Error'){
        let errors = message;
        let errorMessage = message;
        if(!Array.isArray(message)){
            errors = [message];
        } else {
            errorMessage = message[0];
        }
        super(errorMessage);

        this.code = code;
        this.errors = errors;
    }
}
