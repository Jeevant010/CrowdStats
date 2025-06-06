'use client'
import { BraveIcon, ChromeIcon, EdgeIcon, FirefoxIcon, SafariIcon } from '@dynamic-labs/iconic';

const browserIconMap = {
    brave: BraveIcon,
    chrome: ChromeIcon,
    edge: EdgeIcon,
    firefox: FirefoxIcon,
    safari: SafariIcon,
};
const getBrowserIcon = (name) => browserIconMap[name];

export { browserIconMap, getBrowserIcon };
