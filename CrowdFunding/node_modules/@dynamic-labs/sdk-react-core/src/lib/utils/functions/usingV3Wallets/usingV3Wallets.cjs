'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const usingV3Wallets = (projectSettings) => {
    var _a, _b;
    return Boolean(((_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.embeddedWallets) === null || _b === void 0 ? void 0 : _b.defaultWalletVersion) ===
        sdkApiCore.EmbeddedWalletVersionEnum.V3);
};

exports.usingV3Wallets = usingV3Wallets;
