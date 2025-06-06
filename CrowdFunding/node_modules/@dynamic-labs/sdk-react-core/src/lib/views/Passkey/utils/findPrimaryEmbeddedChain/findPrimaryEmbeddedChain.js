'use client'
import { EmbeddedWalletChainEnum, ChainEnum } from '@dynamic-labs/sdk-api-core';
import { Logger } from '@dynamic-labs/logger';

const logger = new Logger('findPrimaryEmbeddedChain');
const supportedChains = Object.values(EmbeddedWalletChainEnum);
const findPrimaryEmbeddedChain = (projectSettings) => {
    var _a, _b, _c;
    const embeddedChainConfig = ((_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.embeddedWallets) === null || _b === void 0 ? void 0 : _b.chainConfigurations) || [];
    const primaryChainName = (_c = embeddedChainConfig.find((chain) => chain.primary)) === null || _c === void 0 ? void 0 : _c.name;
    if (!primaryChainName) {
        // silently return Evm if no primary chain is found
        return ChainEnum.Evm;
    }
    if (supportedChains.includes(primaryChainName)) {
        return primaryChainName;
    }
    else {
        logger.error('Unsupported primary chain', { primaryChainName });
    }
    return ChainEnum.Evm;
};

export { findPrimaryEmbeddedChain };
