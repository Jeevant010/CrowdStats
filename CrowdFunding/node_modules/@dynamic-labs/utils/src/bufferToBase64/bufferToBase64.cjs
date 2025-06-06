'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./bufferPolyfill.cjs');

const bufferToBase64 = (buf) => {
    const binstr = Array.prototype.map
        .call(buf, (ch) => String.fromCharCode(ch))
        .join('');
    return Buffer.from(binstr, 'binary').toString('base64');
};

exports.bufferToBase64 = bufferToBase64;
