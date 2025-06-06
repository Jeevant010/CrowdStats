'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// taken from https://github.com/WalletConnect/walletconnect-utils/blob/master/misc/encoding/src/index.ts
const ENC_HEX = 'hex';
const ENC_UTF8 = 'utf8';
const utf8ToBuffer = (utf8) => Buffer.from(utf8, ENC_UTF8);
const addHexPrefix = (hex) => hex.startsWith('0x') ? hex : `0x${hex}`;
const bufferToHex = (buf, prefixed = false) => {
    const hex = buf.toString(ENC_HEX);
    return prefixed ? addHexPrefix(hex) : hex;
};
const utf8ToHex = (utf8, prefixed = false) => bufferToHex(utf8ToBuffer(utf8), prefixed);

exports.addHexPrefix = addHexPrefix;
exports.bufferToHex = bufferToHex;
exports.utf8ToHex = utf8ToHex;
