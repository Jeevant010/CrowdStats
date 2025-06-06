'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const findTurnkeyVerifiedCredentials = (verifiedCredentials, chain) => verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.filter(({ walletName, chain: vcChain }) => (walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey')) && chain === vcChain);
const findTurnkeyVerifiedCredentialsWithSmartWalletRef = (verifiedCredentials, chain) => verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.reduce((acc, vc) => {
    var _a;
    if (((_a = vc.walletName) === null || _a === void 0 ? void 0 : _a.startsWith('turnkey')) && chain === vc.chain) {
        const smartWallet = verifiedCredentials.find((v) => v.signerRefId === vc.id);
        const smartWalletRefId = smartWallet === null || smartWallet === void 0 ? void 0 : smartWallet.id;
        const smartWalletRefAddress = smartWallet === null || smartWallet === void 0 ? void 0 : smartWallet.address;
        acc.push(Object.assign(Object.assign({}, vc), { smartWalletRefAddress, smartWalletRefId }));
    }
    return acc;
}, []);

exports.findTurnkeyVerifiedCredentials = findTurnkeyVerifiedCredentials;
exports.findTurnkeyVerifiedCredentialsWithSmartWalletRef = findTurnkeyVerifiedCredentialsWithSmartWalletRef;
