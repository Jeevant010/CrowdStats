'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const generateRandomBuffer = () => {
    const arr = new Uint8Array(32);
    crypto.getRandomValues(arr);
    return arr.buffer;
};

exports.generateRandomBuffer = generateRandomBuffer;
