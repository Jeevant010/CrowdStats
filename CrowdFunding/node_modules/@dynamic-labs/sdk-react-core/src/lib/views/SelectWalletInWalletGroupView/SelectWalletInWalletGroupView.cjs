'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
var WalletGroupViewLayout = require('../../components/WalletGroupViewLayout/WalletGroupViewLayout.cjs');
var WalletGroupContext = require('../../context/WalletGroupContext/WalletGroupContext.cjs');
var walletOptions = require('../../store/state/walletOptions/walletOptions.cjs');
var WalletGroupItem = require('./components/WalletGroupItem/WalletGroupItem.cjs');

const SelectWalletInWalletGroupView = ({ onSelectWallet }) => {
    var _a;
    const { selectedWalletGroup } = WalletGroupContext.useWalletGroupContext();
    const walletGroups = walletOptions.useWalletGroups();
    const { t } = reactI18next.useTranslation();
    if (!selectedWalletGroup)
        throw new Error('Could not access WalletGroup view without selected group');
    const walletGroupData = walletGroups[selectedWalletGroup.key];
    if (!walletGroupData)
        throw new Error('Could not access WalletGroup view without group data');
    return (jsxRuntime.jsx(WalletGroupViewLayout.WalletGroupViewLayout, { icon: 
        // eslint-disable-next-line react/jsx-wrap-multilines
        jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletGroupData.key, isGroup: true, icon: (_a = walletGroupData.brand) === null || _a === void 0 ? void 0 : _a.icon }), title: t('dyn_select_wallet.description', {
            walletName: walletGroupData.name,
        }), titleCopyKey: 'dyn_select_wallet.description', children: selectedWalletGroup.groupedWallets.map((wallet, index) => (jsxRuntime.jsx(WalletGroupItem.WalletGroupItem, { groupKey: selectedWalletGroup.key, wallet: wallet, onClick: () => onSelectWallet(wallet) }, `${wallet.key}_${index}`))) }));
};

exports.SelectWalletInWalletGroupView = SelectWalletInWalletGroupView;
