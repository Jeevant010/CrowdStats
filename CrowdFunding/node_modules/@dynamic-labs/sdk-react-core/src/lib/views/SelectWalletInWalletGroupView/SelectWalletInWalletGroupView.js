'use client'
import { jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { WalletGroupViewLayout } from '../../components/WalletGroupViewLayout/WalletGroupViewLayout.js';
import { useWalletGroupContext } from '../../context/WalletGroupContext/WalletGroupContext.js';
import { useWalletGroups } from '../../store/state/walletOptions/walletOptions.js';
import { WalletGroupItem } from './components/WalletGroupItem/WalletGroupItem.js';

const SelectWalletInWalletGroupView = ({ onSelectWallet }) => {
    var _a;
    const { selectedWalletGroup } = useWalletGroupContext();
    const walletGroups = useWalletGroups();
    const { t } = useTranslation();
    if (!selectedWalletGroup)
        throw new Error('Could not access WalletGroup view without selected group');
    const walletGroupData = walletGroups[selectedWalletGroup.key];
    if (!walletGroupData)
        throw new Error('Could not access WalletGroup view without group data');
    return (jsx(WalletGroupViewLayout, { icon: 
        // eslint-disable-next-line react/jsx-wrap-multilines
        jsx(WalletIcon, { walletKey: walletGroupData.key, isGroup: true, icon: (_a = walletGroupData.brand) === null || _a === void 0 ? void 0 : _a.icon }), title: t('dyn_select_wallet.description', {
            walletName: walletGroupData.name,
        }), titleCopyKey: 'dyn_select_wallet.description', children: selectedWalletGroup.groupedWallets.map((wallet, index) => (jsx(WalletGroupItem, { groupKey: selectedWalletGroup.key, wallet: wallet, onClick: () => onSelectWallet(wallet) }, `${wallet.key}_${index}`))) }));
};

export { SelectWalletInWalletGroupView };
