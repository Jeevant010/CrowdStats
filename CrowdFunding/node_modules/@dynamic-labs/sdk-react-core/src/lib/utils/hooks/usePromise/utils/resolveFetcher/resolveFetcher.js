'use client'
import { __awaiter } from '../../../../../../../_virtual/_tslib.js';

const isPromise = (value) => value instanceof Promise;
const resolveFetcher = (fetcher_1, _a, callback_1) => __awaiter(void 0, [fetcher_1, _a, callback_1], void 0, function* (fetcher, { retries }, callback) {
    const totalNumberOfAttempts = retries ? retries + 1 : 1;
    let currentAttempt = 0;
    let data;
    let err;
    while (currentAttempt < totalNumberOfAttempts) {
        currentAttempt = currentAttempt + 1;
        try {
            const result = fetcher();
            if (isPromise(result)) {
                data = yield result;
            }
            else {
                data = result;
            }
            err = undefined;
            // If we have data, we can break the loop
            if (data) {
                break;
            }
        }
        catch (error) {
            err = error;
        }
    }
    callback(err, data);
    return data;
});

export { resolveFetcher };
