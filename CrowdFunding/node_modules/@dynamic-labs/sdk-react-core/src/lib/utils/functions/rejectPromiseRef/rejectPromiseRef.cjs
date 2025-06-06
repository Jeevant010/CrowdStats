'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const rejectPromiseRef = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
promise, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
error) => {
    if (!promise.current)
        return;
    promise.current.reject(error);
    promise.current = null;
};

exports.rejectPromiseRef = rejectPromiseRef;
