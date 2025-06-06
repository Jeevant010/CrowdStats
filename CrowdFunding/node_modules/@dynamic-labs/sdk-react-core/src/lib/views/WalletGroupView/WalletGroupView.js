'use client'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { isHardwareWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { Divider } from '../../components/Divider/Divider.js';
import { HardwareWalletToggle } from '../../components/HardwareWalletToggle/HardwareWalletToggle.js';
import { WalletGroupViewLayout } from '../../components/WalletGroupViewLayout/WalletGroupViewLayout.js';
import { useWalletGroupContext } from '../../context/WalletGroupContext/WalletGroupContext.js';
import { useWalletGroups } from '../../store/state/walletOptions/walletOptions.js';
import { WalletGroupItem } from './components/WalletGroupItem/WalletGroupItem.js';

const WalletGroupView = ({ onSelectWallet, }) => {
    var _a;
    const { selectedWalletGroup } = useWalletGroupContext();
    const walletGroups = useWalletGroups();
    const { t } = useTranslation();
    if (!selectedWalletGroup)
        throw new Error('Could not access WalletGroup view without selected group');
    const walletGroupData = walletGroups[selectedWalletGroup.key];
    if (!walletGroupData)
        throw new Error('Could not find group');
    const hardwareWalletConnectors = selectedWalletGroup.groupedWallets
        .map(({ walletConnector }) => walletConnector)
        .filter((connector) => isHardwareWalletConnector(connector) &&
        connector.canConnectWithHardwareWallet());
    return (jsx(WalletGroupViewLayout, { icon: 
        // eslint-disable-next-line react/jsx-wrap-multilines
        jsx(WalletIcon, { walletKey: walletGroupData.key, isGroup: true, icon: (_a = walletGroupData.brand) === null || _a === void 0 ? void 0 : _a.icon }), title: t('dyn_select_chain.description'), titleCopyKey: 'dyn_select_chain.description', children: jsxs("div", { className: 'wallet-group__list', children: [Boolean(hardwareWalletConnectors.length) && (jsxs(Fragment, { children: [jsx(HardwareWalletToggle, { connectors: hardwareWalletConnectors, copykey: 'dyn_select_chain.using_hardware_wallet_toggle_label', label: t('dyn_select_chain.using_hardware_wallet_toggle_label') }), jsx(Divider, {})] })), jsx("div", { className: 'wallet-group-view-layout__list', children: selectedWalletGroup.groupedWallets.map((wallet, index) => (jsx(WalletGroupItem, { wallet: wallet, onClick: () => onSelectWallet(wallet) }, `${wallet.key}_${index}`))) })] }) }));
};

export { WalletGroupView };
