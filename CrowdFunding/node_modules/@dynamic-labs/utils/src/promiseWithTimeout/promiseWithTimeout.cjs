'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const promiseWithTimeout = (promise, ms, { timeoutMessage = 'Operation timed out' } = {}) => {
    let timerId;
    const timeoutPromise = new Promise((_, reject) => {
        timerId = setTimeout(() => {
            reject(new Error(timeoutMessage));
        }, ms);
    });
    const wrappedPromise = promise.finally(() => {
        clearTimeout(timerId);
    });
    return Promise.race([wrappedPromise, timeoutPromise]);
};

exports.promiseWithTimeout = promiseWithTimeout;
