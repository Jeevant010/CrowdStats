'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const defaultWalletUiUtils = {
    addNetwork: () => {
        throw Error('addNetwork not implemented');
    },
    disabledConfirmationOnce: () => {
        throw Error('disabledConfirmationOnce, not implemented');
    },
    sendTransaction: () => {
        throw Error('requestSendTransactionConfirmation not implemented');
    },
    signMessage: () => {
        throw Error('signMessage not implemented');
    },
    signTransaction: () => {
        throw Error('signTransaction not implemented');
    },
    syncWallet: () => {
        throw Error('syncWallet not implemented');
    },
    zkSyncCreateSession: () => {
        throw Error('zkSyncCreateSession not implemented');
    },
};

exports.defaultWalletUiUtils = defaultWalletUiUtils;
