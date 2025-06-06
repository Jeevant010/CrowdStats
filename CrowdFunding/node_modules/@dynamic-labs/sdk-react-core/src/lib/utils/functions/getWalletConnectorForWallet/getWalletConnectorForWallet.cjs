'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletOptions = require('../../../store/state/walletOptions/walletOptions.cjs');

const getWalletConnectorForWallet = (wallet) => {
    var _a, _b;
    if (!wallet) {
        return undefined;
    }
    const walletConnectorOptions = walletOptions.getWalletConnectorOptions();
    const { key: walletKey, chain } = wallet;
    const walletConnector = (_a = walletConnectorOptions.find((wallet) => walletKey === wallet.key &&
        wallet.walletConnector.connectedChain === chain)) === null || _a === void 0 ? void 0 : _a.walletConnector;
    if (walletConnector) {
        return walletConnector;
    }
    const fallbackConnector = (_b = walletConnectorOptions.find((wallet) => wallet.key === 'fallbackconnector')) === null || _b === void 0 ? void 0 : _b.walletConnector;
    return fallbackConnector;
};

exports.getWalletConnectorForWallet = getWalletConnectorForWallet;
