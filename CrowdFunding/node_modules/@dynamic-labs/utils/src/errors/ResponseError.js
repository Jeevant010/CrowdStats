'use client'
import { __awaiter } from '../../_virtual/_tslib.js';
import { CustomError } from './CustomError.js';

class ResponseError extends CustomError {
    constructor({ message, cause, jsonData }) {
        const messageError = `
    Message: ${message !== null && message !== void 0 ? message : 'Unknown'}
    URL: ${cause.url}
    Status: ${cause.status}
    Status Text: ${cause.statusText}
    Type: ${cause.type}
    Redirect: ${cause.redirected}

    Json data:${jsonData ? '\n' + JSON.stringify(jsonData, null, 2) : ' No data'}
    `.trim();
        super(messageError);
        this.jsonData = jsonData;
        this.response = cause;
        this.cause = cause;
    }
    get json() {
        return this.jsonData;
    }
    static fromResponse(_a) {
        return __awaiter(this, arguments, void 0, function* ({ cause, message, }) {
            const jsonData = yield cause.json();
            return new ResponseError({
                cause,
                jsonData,
                message,
            });
        });
    }
}

export { ResponseError };
