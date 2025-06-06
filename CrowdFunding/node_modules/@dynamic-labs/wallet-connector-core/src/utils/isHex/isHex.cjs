'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isHex = (value) => {
    if (!value)
        return false;
    if (typeof value !== 'string')
        return false;
    return /^0x[0-9a-fA-F]*$/.test(value);
};

exports.isHex = isHex;
