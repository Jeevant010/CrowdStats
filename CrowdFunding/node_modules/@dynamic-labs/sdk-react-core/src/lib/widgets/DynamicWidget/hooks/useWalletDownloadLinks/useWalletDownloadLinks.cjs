'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var parseWalletLinks = require('../../../../utils/functions/parseWalletLinks/parseWalletLinks.cjs');
var getBrowserIcon = require('../../../../shared/utils/functions/getBrowserIcon/getBrowserIcon.cjs');

const useWalletDownloadLinks = (walletConnector) => {
    if (!(walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.metadata.downloadLinks)) {
        return [];
    }
    const walletLinks = walletConnectorCore.getWalletLinks(walletConnector.metadata.downloadLinks);
    const { currentDesktopUrl, userBrowser } = parseWalletLinks.parseWalletLinks(walletLinks);
    if (userBrowser && currentDesktopUrl) {
        return [
            {
                Icon: getBrowserIcon.getBrowserIcon(userBrowser),
                key: userBrowser,
                link: currentDesktopUrl,
                name: userBrowser,
            },
        ];
    }
    return Object.entries(walletLinks)
        .filter(([, link]) => link !== '')
        .filter(([name]) => name !== 'ios' && name !== 'android')
        .map(([name, link]) => ({
        Icon: getBrowserIcon.getBrowserIcon(name),
        key: name,
        link: link,
        name: name,
    }));
};

exports.useWalletDownloadLinks = useWalletDownloadLinks;
