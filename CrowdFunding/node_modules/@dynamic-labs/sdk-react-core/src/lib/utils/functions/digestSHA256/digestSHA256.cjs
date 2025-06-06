'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const digestSHA256 = (str) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    return window.crypto.subtle.digest('SHA-256', data);
};

exports.digestSHA256 = digestSHA256;
