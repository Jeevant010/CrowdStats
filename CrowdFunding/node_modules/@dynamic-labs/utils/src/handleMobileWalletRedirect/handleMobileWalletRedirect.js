'use client'
import { isSamsungBrowser } from '../isMobile/isMobile.js';
import { PlatformService } from '../services/PlatformService/PlatformService.js';
import '../../_virtual/_tslib.js';
import 'tldts';

const handleMobileWalletRedirect = ({ nativeLink, universalLink, }) => {
    const url = encodeURIComponent(PlatformService.getUrl().href);
    const ref = encodeURIComponent(PlatformService.getOrigin());
    // samsung browser only supports native links, not universal links
    if (isSamsungBrowser()) {
        PlatformService.openURL(`${nativeLink}/${url}?ref=${ref}`);
    }
    else {
        PlatformService.openURL(`${universalLink}/${url}?ref=${ref}`);
    }
};

export { handleMobileWalletRedirect };
