'use client'
import { StorageService } from '@dynamic-labs/utils';
import { LAST_USED_WALLET } from '../../../../utils/constants/localStorage.js';
import '../../../../utils/constants/colors.js';
import '../../../../utils/constants/values.js';
import { isWalletGroup } from '../../../../utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.js';
import { getWalletGroupType } from '../../../../utils/functions/getWalletGroupType/getWalletGroupType.js';

const getLastUsedWalletKey = () => StorageService.getItem(LAST_USED_WALLET);
const getWalletGroupLabel = (walletGroup, recommendedWallets) => {
    const nestedRecommendedWalletSetting = recommendedWallets === null || recommendedWallets === void 0 ? void 0 : recommendedWallets.find((recommendedWallet) => walletGroup.groupedWallets.some((walletOption) => recommendedWallet.walletKey === walletOption.walletConnector.key));
    if (nestedRecommendedWalletSetting) {
        return {
            isRecommended: true,
            label: nestedRecommendedWalletSetting.label || 'Recommended',
        };
    }
    const lastUsedWalletKey = getLastUsedWalletKey();
    const hasNestedLastUsedWallet = walletGroup.groupedWallets.some((walletOption) => walletOption.walletConnector.key === lastUsedWalletKey);
    if (hasNestedLastUsedWallet) {
        return { label: 'Last used' };
    }
    const hasNestedInstalledWallets = walletGroup.groupedWallets.some((walletOption) => walletOption.isInstalledOnBrowser);
    if (hasNestedInstalledWallets) {
        return { label: 'Installed' };
    }
    if (getWalletGroupType(walletGroup) === 'multi-chain') {
        return { label: 'Multichain' };
    }
    return undefined;
};
const getWalletLabel = (walletOption, recommendedWallets) => {
    const lastUsedWalletKey = getLastUsedWalletKey();
    const { key: walletKey } = walletOption.walletConnector;
    const recommendedWalletSetting = recommendedWallets === null || recommendedWallets === void 0 ? void 0 : recommendedWallets.find((wallet) => wallet.walletKey === walletKey);
    if (recommendedWalletSetting)
        return {
            isRecommended: true,
            label: recommendedWalletSetting.label || 'Recommended',
        };
    const isLastUsedWallet = walletKey === lastUsedWalletKey;
    if (isLastUsedWallet)
        return { label: 'Last used' };
    if (walletOption.isInstalledOnBrowser)
        return { label: 'Installed' };
    return undefined;
};
const getWalletListItemLabel = ({ wallet, recommendedWallets, }) => {
    if (isWalletGroup(wallet)) {
        return getWalletGroupLabel(wallet, recommendedWallets);
    }
    return getWalletLabel(wallet, recommendedWallets);
};

export { getWalletListItemLabel };
