'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const transformAndroidId = (url) => {
    if (!(url === null || url === void 0 ? void 0 : url.match(/^https?:\/\//)))
        return url;
    if (!url)
        return;
    try {
        const urlObject = new URL(url);
        const id = urlObject.searchParams.get('id');
        if (id) {
            return id;
        }
    }
    catch (_a) {
        // ignore
    }
    return;
};

exports.transformAndroidId = transformAndroidId;
