'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
require('@dynamic-labs/utils');
var values = require('../../constants/values.cjs');

const findTurnkeyWalletByChain = (walletOptions, chainName) => {
    const chain = chainName
        ? values.VerifiedCredentialNameToChainEnum[chainName]
        : undefined;
    return walletOptions === null || walletOptions === void 0 ? void 0 : walletOptions.find(({ key, walletConnector }) => key.startsWith('turnkey') && (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.connectedChain) === chain);
};
const findTurnkeyWalletByPrimaryChain = (walletOptions, chainConfigurations, verifiedCredentials) => {
    var _a;
    const primaryEmbeddedChain = ((_a = chainConfigurations === null || chainConfigurations === void 0 ? void 0 : chainConfigurations.find((chain) => chain.primary)) === null || _a === void 0 ? void 0 : _a.name) || sdkApiCore.ChainEnum.Evm;
    const walletConnector = findTurnkeyWalletByChain(walletOptions, values.ChainEnumToVerifiedCredentialName[primaryEmbeddedChain]);
    const turnkeyVC = verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ walletName, chain }) => (walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey')) &&
        chain === values.ChainEnumToVerifiedCredentialName[primaryEmbeddedChain]);
    if (!walletConnector) {
        return undefined;
    }
    return Object.assign(Object.assign({}, turnkeyVC), walletConnector);
};

exports.findTurnkeyWalletByChain = findTurnkeyWalletByChain;
exports.findTurnkeyWalletByPrimaryChain = findTurnkeyWalletByPrimaryChain;
