'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var iconic = require('@dynamic-labs/iconic');

const browserIconMap = {
    brave: iconic.BraveIcon,
    chrome: iconic.ChromeIcon,
    edge: iconic.EdgeIcon,
    firefox: iconic.FirefoxIcon,
    safari: iconic.SafariIcon,
};
const getBrowserIcon = (name) => browserIconMap[name];

exports.browserIconMap = browserIconMap;
exports.getBrowserIcon = getBrowserIcon;
