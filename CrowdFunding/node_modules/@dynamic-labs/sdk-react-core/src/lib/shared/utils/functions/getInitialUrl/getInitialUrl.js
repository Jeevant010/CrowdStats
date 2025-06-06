'use client'
import { isSSR } from '../isSSR/isSSR.js';

let initialUrl;
(() => {
    if (!isSSR()) {
        // TODO: use PlatformService
        initialUrl = new URL(window.location.href);
    }
})();
const getInitialUrl = () => initialUrl;

export { getInitialUrl };
