'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getWalletAdditionalAddressByType = (type, wallet) => {
    var _a, _b;
    return (_b = (_a = wallet === null || wallet === void 0 ? void 0 : wallet.additionalAddresses) === null || _a === void 0 ? void 0 : _a.find((address) => address.type === type)) === null || _b === void 0 ? void 0 : _b.address;
};

exports.getWalletAdditionalAddressByType = getWalletAdditionalAddressByType;
