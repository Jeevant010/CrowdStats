'use client'
/**
 * Extend this class to allow usage of instanceof
 */
class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = undefined;
        this.code = code;
        Object.setPrototypeOf(this, this.constructor.prototype);
    }
    toJSON() {
        return {
            code: this.code,
            error: this.message,
        };
    }
}

export { CustomError };
