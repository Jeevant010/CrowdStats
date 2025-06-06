'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isSSR = require('../isSSR/isSSR.cjs');

let initialUrl;
(() => {
    if (!isSSR.isSSR()) {
        // TODO: use PlatformService
        initialUrl = new URL(window.location.href);
    }
})();
const getInitialUrl = () => initialUrl;

exports.getInitialUrl = getInitialUrl;
