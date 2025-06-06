'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isLedgerAddressViaVerifiedCredentials = (address, verifiedCredentials) => {
    const ledgerWallets = verifiedCredentials
        .filter((v) => { var _a; return ((_a = v.walletProperties) === null || _a === void 0 ? void 0 : _a.hardwareWallet) === 'ledger'; })
        .map((v) => v.address);
    return ledgerWallets.includes(address);
};

exports.isLedgerAddressViaVerifiedCredentials = isLedgerAddressViaVerifiedCredentials;
