'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../_virtual/_tslib.cjs');

const isPromise = (value) => value instanceof Promise;
const resolveFetcher = (fetcher_1, _a, callback_1) => _tslib.__awaiter(void 0, [fetcher_1, _a, callback_1], void 0, function* (fetcher, { retries }, callback) {
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

exports.resolveFetcher = resolveFetcher;
