'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const idRegex = /^id[0-9]{1,36}$/;
const transformIosId = (url) => {
    if (url === null || url === void 0 ? void 0 : url.match(idRegex))
        return url;
    if (url === null || url === void 0 ? void 0 : url.match(/^https:\/\/[a-zA-Z0-9-]+\.apple\.com/)) {
        try {
            const urlObject = new URL(url);
            const expectedId = urlObject.pathname
                .replace(/\/$/, '')
                .split('/')
                .at(-1);
            if (expectedId === null || expectedId === void 0 ? void 0 : expectedId.match(idRegex)) {
                return expectedId;
            }
        }
        catch (_a) {
            // ignore
        }
    }
    return;
};

exports.transformIosId = transformIosId;
