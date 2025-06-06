'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSignTypedData = (data) => {
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    const { types, message, primaryType } = data;
    return (typeof types === 'object' &&
        types !== null &&
        typeof message === 'object' &&
        message !== null &&
        typeof primaryType === 'string');
};

exports.isSignTypedData = isSignTypedData;
