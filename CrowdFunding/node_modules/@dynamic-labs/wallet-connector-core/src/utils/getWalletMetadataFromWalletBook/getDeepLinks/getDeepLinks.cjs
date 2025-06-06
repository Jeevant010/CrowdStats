'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getMobileDeepLinks = (mobile) => {
    if (!mobile) {
        return;
    }
    return {
        native: mobile.native,
        universal: mobile.universal,
    };
};
const getDesktopDeepLinks = (desktop) => {
    if (!desktop) {
        return;
    }
    return {
        native: desktop.native,
        universal: desktop.universal,
    };
};
const getDeepLinks = ({ mobile, desktop, }) => {
    const mobileDeepLinks = getMobileDeepLinks(mobile);
    const desktopDeepLinks = getDesktopDeepLinks(desktop);
    if (!mobileDeepLinks && !desktopDeepLinks) {
        return;
    }
    return {
        desktop: desktopDeepLinks,
        mobile: mobileDeepLinks,
    };
};

exports.getDeepLinks = getDeepLinks;
