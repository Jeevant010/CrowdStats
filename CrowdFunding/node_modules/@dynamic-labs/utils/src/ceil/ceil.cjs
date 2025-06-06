'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ceil = (value, precision = 0) => {
    const multiplier = Math.pow(10, precision);
    return Math.ceil(value * multiplier) / multiplier;
};

exports.ceil = ceil;
