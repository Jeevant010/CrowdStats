'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var Divider = require('../../components/Divider/Divider.cjs');
var HardwareWalletToggle = require('../../components/HardwareWalletToggle/HardwareWalletToggle.cjs');
var WalletGroupViewLayout = require('../../components/WalletGroupViewLayout/WalletGroupViewLayout.cjs');
var WalletGroupContext = require('../../context/WalletGroupContext/WalletGroupContext.cjs');
var walletOptions = require('../../store/state/walletOptions/walletOptions.cjs');
var WalletGroupItem = require('./components/WalletGroupItem/WalletGroupItem.cjs');

const WalletGroupView = ({ onSelectWallet, }) => {
    var _a;
    const { selectedWalletGroup } = WalletGroupContext.useWalletGroupContext();
    const walletGroups = walletOptions.useWalletGroups();
    const { t } = reactI18next.useTranslation();
    if (!selectedWalletGroup)
        throw new Error('Could not access WalletGroup view without selected group');
    const walletGroupData = walletGroups[selectedWalletGroup.key];
    if (!walletGroupData)
        throw new Error('Could not find group');
    const hardwareWalletConnectors = selectedWalletGroup.groupedWallets
        .map(({ walletConnector }) => walletConnector)
        .filter((connector) => walletConnectorCore.isHardwareWalletConnector(connector) &&
        connector.canConnectWithHardwareWallet());
    return (jsxRuntime.jsx(WalletGroupViewLayout.WalletGroupViewLayout, { icon: 
        // eslint-disable-next-line react/jsx-wrap-multilines
        jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletGroupData.key, isGroup: true, icon: (_a = walletGroupData.brand) === null || _a === void 0 ? void 0 : _a.icon }), title: t('dyn_select_chain.description'), titleCopyKey: 'dyn_select_chain.description', children: jsxRuntime.jsxs("div", { className: 'wallet-group__list', children: [Boolean(hardwareWalletConnectors.length) && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(HardwareWalletToggle.HardwareWalletToggle, { connectors: hardwareWalletConnectors, copykey: 'dyn_select_chain.using_hardware_wallet_toggle_label', label: t('dyn_select_chain.using_hardware_wallet_toggle_label') }), jsxRuntime.jsx(Divider.Divider, {})] })), jsxRuntime.jsx("div", { className: 'wallet-group-view-layout__list', children: selectedWalletGroup.groupedWallets.map((wallet, index) => (jsxRuntime.jsx(WalletGroupItem.WalletGroupItem, { wallet: wallet, onClick: () => onSelectWallet(wallet) }, `${wallet.key}_${index}`))) })] }) }));
};

exports.WalletGroupView = WalletGroupView;
