'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var viem = require('viem');

const parseAddress = (address) => {
    try {
        return viem.getAddress(address);
    }
    catch (error) {
        return address;
    }
};

exports.parseAddress = parseAddress;
