'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var viem = require('viem');

const getTransactionRecipient = (data, to) => {
    // 0xa9059cbb is the function selector for the transfer function
    // so we can use it to check if the transaction is a transfer
    // then decode the transaction data to get the recipient
    if (data === null || data === void 0 ? void 0 : data.startsWith('0xa9059cbb')) {
        return viem.decodeAbiParameters([
            { name: 'x', type: 'address' },
            { name: 'x', type: 'uint256' },
        ], ('0x' + (data === null || data === void 0 ? void 0 : data.slice(10))))[0];
    }
    // if the data is 0x or undefined, then the recipient is the "to" address
    if (!data || data === '0x') {
        return to !== null && to !== void 0 ? to : undefined;
    }
    return undefined;
};

exports.getTransactionRecipient = getTransactionRecipient;
