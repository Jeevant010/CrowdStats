'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shouldLowercaseAddress = require('../../../shouldLowercaseAddress.cjs');

const normalizeAddress = (rawAddress, chain) => {
    let address = rawAddress;
    if (address === null || address === void 0 ? void 0 : address.startsWith('0x')) {
        address = address.slice(2);
    }
    address = shouldLowercaseAddress.shouldLowercaseAddress(chain) ? address === null || address === void 0 ? void 0 : address.toLowerCase() : address;
    return address;
};

exports.normalizeAddress = normalizeAddress;
