'use client'
import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { getWalletProvider } from '@dynamic-labs/wallet-connector-core';

const specialCareWallets = ['bloctoevm', 'perawallet', 'metamaskstarknet'];
const showPendingConnectView = (walletConnector, pushView) => __awaiter(void 0, void 0, void 0, function* () {
    const walletProvider = getWalletProvider(walletConnector);
    // We don't want to show the pending connect view for qrCode and walletConnect
    // They have their own view with qrCode so we don't need to show the pending connect view
    if (walletProvider === 'walletConnect' || walletProvider === 'qrCode') {
        return;
    }
    specialCareWallets.forEach((wallet) => {
        if (walletConnector.key === wallet) {
            // bloctoevm and some other wallets works different as Justin mentioned in this commit:
            // https://github.com/dynamic-labs/DynamicAuth/commit/57233d3620611bc91439f3d4587b8516f8d16f99
            // It needs to show the connect view before getting connected accounts
            pushView('pending-connect');
        }
    });
    const connectedAccounts = yield walletConnector.getConnectedAccounts();
    /* istanbul ignore else */
    if (connectedAccounts.length === 0) {
        pushView('pending-connect');
    }
});

export { showPendingConnectView };
