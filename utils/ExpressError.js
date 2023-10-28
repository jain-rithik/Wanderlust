class ExpressError extends Error {
    constructor(statusCode, messgae) {
        super();
        this.statusCode = statusCode;
        this.message = messgae;
    }
}

module.exports = ExpressError;