'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const transformEdgeExtensionId = (url) => {
    if (url === null || url === void 0 ? void 0 : url.match(/^[a-z]{32}$/))
        return url;
    if (url === null || url === void 0 ? void 0 : url.includes('microsoftedge.microsoft.com/addons/detail/')) {
        try {
            const urlObject = new URL(url);
            return urlObject.pathname.split('/').at(-1);
        }
        catch (_a) {
            // ignore
        }
    }
    return;
};

exports.transformEdgeExtensionId = transformEdgeExtensionId;
