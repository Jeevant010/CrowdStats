'use client'
const transformFirefoxExtensionId = (url) => {
    if (!(url === null || url === void 0 ? void 0 : url.match(/^https?:\/\//)))
        return url;
    if (url === null || url === void 0 ? void 0 : url.includes('addons.mozilla.org')) {
        try {
            const urlObject = new URL(url);
            return urlObject.pathname.replace(/\/$/, '').split('/').at(-1);
        }
        catch (_a) {
            // ignore
        }
    }
    return;
};

export { transformFirefoxExtensionId };
