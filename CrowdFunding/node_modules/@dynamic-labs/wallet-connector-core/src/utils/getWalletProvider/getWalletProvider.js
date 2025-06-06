'use client'
import { isMobile } from '@dynamic-labs/utils';
import { WalletProviderEnum } from '@dynamic-labs/sdk-api-core';

const getWalletProvider = (connector) => {
    if (connector.isEmbeddedWallet) {
        return WalletProviderEnum.EmbeddedWallet;
    }
    if (connector.canConnectViaCustodialService) {
        return WalletProviderEnum.CustodialService;
    }
    if (connector.isInstalledOnBrowser()) {
        return WalletProviderEnum.BrowserExtension;
    }
    return isMobile() ? WalletProviderEnum.DeepLink : WalletProviderEnum.QrCode;
};

export { getWalletProvider };
