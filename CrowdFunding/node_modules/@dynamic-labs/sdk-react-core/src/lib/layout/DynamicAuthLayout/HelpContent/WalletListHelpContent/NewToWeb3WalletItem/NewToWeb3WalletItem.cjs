'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var useWalletItemActions = require('../../../../../utils/hooks/useWalletItemActions/useWalletItemActions.cjs');
var WalletListItem = require('../../../../../views/WalletList/WalletListItem/WalletListItem.cjs');

const NewToWeb3WalletItem = ({ children, style, wallet, }) => {
    const { handleWalletItemClick } = useWalletItemActions.useWalletItemActions();
    return (jsxRuntime.jsx(WalletListItem.WalletListItem, { wallet: wallet, onSelectWallet: handleWalletItemClick, tile: children
            ? ({ onClick }) => (jsxRuntime.jsx("button", { className: 'new-to-web3--button', style: style, onClick: onClick, children: children }))
            : undefined }));
};

exports.NewToWeb3WalletItem = NewToWeb3WalletItem;
