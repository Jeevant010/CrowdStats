'use client'
import './bufferPolyfill.js';

const bufferToBase64 = (buf) => {
    const binstr = Array.prototype.map
        .call(buf, (ch) => String.fromCharCode(ch))
        .join('');
    return Buffer.from(binstr, 'binary').toString('base64');
};

export { bufferToBase64 };
