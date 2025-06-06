'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var sleep = require('../sleep/sleep.cjs');

const FALLBACK_UNDEFINED = 'FALLBACK_UNDEFINED';
const retryableFn = (fn_1, ...args_1) => _tslib.__awaiter(void 0, [fn_1, ...args_1], void 0, function* (fn, options = {}) {
    const { maxRetries = 3, currentRetry = 0, timeoutMs = 100, fallbackValue = new Error('Max retries reached'), retryStrategy = 'timeout-only', retryIntervalMs = 0, } = options;
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout'));
        }, timeoutMs);
    });
    try {
        const result = yield Promise.race([fn(), timeoutPromise]);
        return result;
    }
    catch (err) {
        if (currentRetry >= maxRetries) {
            if (fallbackValue instanceof Error) {
                throw fallbackValue;
            }
            else if (fallbackValue === FALLBACK_UNDEFINED) {
                return undefined;
            }
            return fallbackValue;
        }
        const isTimeout = (err === null || err === void 0 ? void 0 : err.message) === 'Timeout';
        const shouldRetry = retryStrategy === 'timeout-and-rejection' ||
            (retryStrategy === 'timeout-only' && isTimeout) ||
            (retryStrategy === 'rejection-only' && !isTimeout);
        if (!shouldRetry) {
            if (fallbackValue instanceof Error) {
                throw err;
            }
            else if (fallbackValue === FALLBACK_UNDEFINED) {
                return undefined;
            }
            return fallbackValue;
        }
        if (retryIntervalMs)
            yield sleep.sleep(retryIntervalMs);
        return retryableFn(fn, {
            currentRetry: currentRetry + 1,
            fallbackValue,
            maxRetries,
            retryIntervalMs,
            retryStrategy,
            timeoutMs,
        });
    }
});

exports.FALLBACK_UNDEFINED = FALLBACK_UNDEFINED;
exports.retryableFn = retryableFn;
