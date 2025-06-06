'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isMobile = require('../isMobile/isMobile.cjs');
var PlatformService = require('../services/PlatformService/PlatformService.cjs');
require('../../_virtual/_tslib.cjs');
require('tldts');

const handleMobileWalletRedirect = ({ nativeLink, universalLink, }) => {
    const url = encodeURIComponent(PlatformService.PlatformService.getUrl().href);
    const ref = encodeURIComponent(PlatformService.PlatformService.getOrigin());
    // samsung browser only supports native links, not universal links
    if (isMobile.isSamsungBrowser()) {
        PlatformService.PlatformService.openURL(`${nativeLink}/${url}?ref=${ref}`);
    }
    else {
        PlatformService.PlatformService.openURL(`${universalLink}/${url}?ref=${ref}`);
    }
};

exports.handleMobileWalletRedirect = handleMobileWalletRedirect;
