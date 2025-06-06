'use client'
import { getWalletConnectorOptions } from '../../../store/state/walletOptions/walletOptions.js';

const getWalletConnectorForWallet = (wallet) => {
    var _a, _b;
    if (!wallet) {
        return undefined;
    }
    const walletConnectorOptions = getWalletConnectorOptions();
    const { key: walletKey, chain } = wallet;
    const walletConnector = (_a = walletConnectorOptions.find((wallet) => walletKey === wallet.key &&
        wallet.walletConnector.connectedChain === chain)) === null || _a === void 0 ? void 0 : _a.walletConnector;
    if (walletConnector) {
        return walletConnector;
    }
    const fallbackConnector = (_b = walletConnectorOptions.find((wallet) => wallet.key === 'fallbackconnector')) === null || _b === void 0 ? void 0 : _b.walletConnector;
    return fallbackConnector;
};

export { getWalletConnectorForWallet };
