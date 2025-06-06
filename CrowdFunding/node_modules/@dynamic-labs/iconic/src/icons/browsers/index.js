'use client'
import { createIconic } from '../../Iconic.js';

const BraveIcon = createIconic({
    alt: 'Brave Browser',
    iconName: 'brave',
    sourcePath: 'icons/browsers/brave.svg',
});
const ChromeIcon = createIconic({
    alt: 'Chrome Browser',
    iconName: 'chrome',
    sourcePath: 'icons/browsers/chrome.svg',
});
const EdgeIcon = createIconic({
    alt: 'Edge Browser',
    iconName: 'edge',
    sourcePath: 'icons/browsers/edge.svg',
});
const FirefoxIcon = createIconic({
    alt: 'Firefox Browser',
    iconName: 'firefox',
    sourcePath: 'icons/browsers/firefox.svg',
});
const OperaIcon = createIconic({
    alt: 'Opera Browser',
    iconName: 'opera',
    sourcePath: 'icons/browsers/opera.svg',
});
const SafariIcon = createIconic({
    alt: 'Opera Browser',
    iconName: 'safari',
    sourcePath: 'icons/browsers/safari.svg',
});

export { BraveIcon, ChromeIcon, EdgeIcon, FirefoxIcon, OperaIcon, SafariIcon };
