'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function sleep(timeoutMs, valueToResolve) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(valueToResolve), timeoutMs);
    });
}

exports.sleep = sleep;
