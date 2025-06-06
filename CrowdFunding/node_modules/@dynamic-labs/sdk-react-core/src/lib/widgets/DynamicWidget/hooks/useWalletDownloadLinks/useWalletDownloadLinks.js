'use client'
import { getWalletLinks } from '@dynamic-labs/wallet-connector-core';
import { parseWalletLinks } from '../../../../utils/functions/parseWalletLinks/parseWalletLinks.js';
import { getBrowserIcon } from '../../../../shared/utils/functions/getBrowserIcon/getBrowserIcon.js';

const useWalletDownloadLinks = (walletConnector) => {
    if (!(walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.metadata.downloadLinks)) {
        return [];
    }
    const walletLinks = getWalletLinks(walletConnector.metadata.downloadLinks);
    const { currentDesktopUrl, userBrowser } = parseWalletLinks(walletLinks);
    if (userBrowser && currentDesktopUrl) {
        return [
            {
                Icon: getBrowserIcon(userBrowser),
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
        Icon: getBrowserIcon(name),
        key: name,
        link: link,
        name: name,
    }));
};

export { useWalletDownloadLinks };
