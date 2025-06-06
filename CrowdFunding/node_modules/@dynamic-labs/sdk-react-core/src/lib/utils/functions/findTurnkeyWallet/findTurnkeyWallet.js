'use client'
import { ChainEnum } from '@dynamic-labs/sdk-api-core';
import '@dynamic-labs/utils';
import { ChainEnumToVerifiedCredentialName, VerifiedCredentialNameToChainEnum } from '../../constants/values.js';

const findTurnkeyWalletByChain = (walletOptions, chainName) => {
    const chain = chainName
        ? VerifiedCredentialNameToChainEnum[chainName]
        : undefined;
    return walletOptions === null || walletOptions === void 0 ? void 0 : walletOptions.find(({ key, walletConnector }) => key.startsWith('turnkey') && (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.connectedChain) === chain);
};
const findTurnkeyWalletByPrimaryChain = (walletOptions, chainConfigurations, verifiedCredentials) => {
    var _a;
    const primaryEmbeddedChain = ((_a = chainConfigurations === null || chainConfigurations === void 0 ? void 0 : chainConfigurations.find((chain) => chain.primary)) === null || _a === void 0 ? void 0 : _a.name) || ChainEnum.Evm;
    const walletConnector = findTurnkeyWalletByChain(walletOptions, ChainEnumToVerifiedCredentialName[primaryEmbeddedChain]);
    const turnkeyVC = verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ walletName, chain }) => (walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey')) &&
        chain === ChainEnumToVerifiedCredentialName[primaryEmbeddedChain]);
    if (!walletConnector) {
        return undefined;
    }
    return Object.assign(Object.assign({}, turnkeyVC), walletConnector);
};

export { findTurnkeyWalletByChain, findTurnkeyWalletByPrimaryChain };
