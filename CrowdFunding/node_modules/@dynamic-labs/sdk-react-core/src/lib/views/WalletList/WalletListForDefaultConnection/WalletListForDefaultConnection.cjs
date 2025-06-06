'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var useAuthLayoutChecks = require('../../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.cjs');
var useWalletItemActions = require('../../../utils/hooks/useWalletItemActions/useWalletItemActions.cjs');
var WalletList = require('../WalletList.cjs');

const WalletListForDefaultConnection = ({ isWalletConnectList }) => {
    const { handleWalletItemClick } = useWalletItemActions.useWalletItemActions();
    const { showDefaultFooter } = useAuthLayoutChecks.useAuthLayoutChecks();
    return (jsxRuntime.jsx(WalletList.WalletList, { onSelectWallet: handleWalletItemClick, isWalletConnectList: isWalletConnectList, showDefaultFooter: showDefaultFooter }));
};

exports.WalletListForDefaultConnection = WalletListForDefaultConnection;
