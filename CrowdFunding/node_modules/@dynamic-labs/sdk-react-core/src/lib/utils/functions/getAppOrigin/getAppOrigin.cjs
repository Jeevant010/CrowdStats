'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getAppOrigin = () => {
    if (typeof window !== 'undefined') {
        // TODO: use PlatformService
        return window.location.origin;
    }
    return undefined;
};

exports.getAppOrigin = getAppOrigin;
