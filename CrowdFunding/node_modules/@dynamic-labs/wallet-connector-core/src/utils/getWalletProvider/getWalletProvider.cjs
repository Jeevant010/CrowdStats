'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const getWalletProvider = (connector) => {
    if (connector.isEmbeddedWallet) {
        return sdkApiCore.WalletProviderEnum.EmbeddedWallet;
    }
    if (connector.canConnectViaCustodialService) {
        return sdkApiCore.WalletProviderEnum.CustodialService;
    }
    if (connector.isInstalledOnBrowser()) {
        return sdkApiCore.WalletProviderEnum.BrowserExtension;
    }
    return utils.isMobile() ? sdkApiCore.WalletProviderEnum.DeepLink : sdkApiCore.WalletProviderEnum.QrCode;
};

exports.getWalletProvider = getWalletProvider;
