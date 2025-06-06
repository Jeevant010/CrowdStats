'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const resolvePromiseRef = (promise, value) => {
    if (!promise.current)
        return;
    promise.current.resolve(value);
    promise.current = null;
};

exports.resolvePromiseRef = resolvePromiseRef;
