'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const detectBrowserName = (customUserAgent) => {
    const userAgent = customUserAgent || navigator.userAgent;
    if (userAgent.match(/brave/i)) {
        return 'brave';
    }
    else if (userAgent.match(/edg/i)) {
        return 'edge';
    }
    else if (userAgent.match(/chrome|chromium|crios/i)) {
        return 'chrome';
    }
    else if (userAgent.match(/firefox|fxios/i)) {
        return 'firefox';
    }
    else if (userAgent.match(/safari/i)) {
        return 'safari';
    }
    return undefined;
};

exports.detectBrowserName = detectBrowserName;
