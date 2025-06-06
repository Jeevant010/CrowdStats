'use client'
const getMobileDownloadLinks = (mobile) => {
    if (!mobile) {
        return;
    }
    return {
        androidId: mobile.androidId,
        iosId: mobile.iosId,
    };
};
const getDesktopDownloadLinks = (desktop) => {
    if (!desktop) {
        return;
    }
    return {
        chromeId: desktop.chromeId,
        edgeId: desktop.edgeId,
        firefoxId: desktop.firefoxId,
        operaId: desktop.operaId,
        safariId: desktop.safariId,
    };
};
const getDownloadLinks = (wallet) => {
    const mobileLinks = getMobileDownloadLinks(wallet.mobile);
    const desktopLinks = getDesktopDownloadLinks(wallet.desktop);
    if (!mobileLinks && !desktopLinks) {
        return;
    }
    return Object.assign(Object.assign({}, mobileLinks), desktopLinks);
};

export { getDownloadLinks };
