'use client'
import { EmbeddedWalletVersionEnum } from '@dynamic-labs/sdk-api-core';

const usingV3Wallets = (projectSettings) => {
    var _a, _b;
    return Boolean(((_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.embeddedWallets) === null || _b === void 0 ? void 0 : _b.defaultWalletVersion) ===
        EmbeddedWalletVersionEnum.V3);
};

export { usingV3Wallets };
