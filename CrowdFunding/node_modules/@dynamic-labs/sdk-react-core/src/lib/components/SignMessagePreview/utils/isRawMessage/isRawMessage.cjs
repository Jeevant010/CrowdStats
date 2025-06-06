'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isRawMessage = (data) => {
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    return typeof data.raw === 'string';
};

exports.isRawMessage = isRawMessage;
