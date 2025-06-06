'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletBook = require('@dynamic-labs/wallet-book');

const getWalletLinks = (downloadLinks) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const links = {
        android: '',
        brave: '',
        chrome: '',
        edge: '',
        firefox: '',
        ios: '',
    };
    if (!downloadLinks) {
        return links;
    }
    links.brave = (_a = walletBook.renderTemplate('chromeUrl', downloadLinks.chromeId)) !== null && _a !== void 0 ? _a : '';
    links.chrome = (_b = walletBook.renderTemplate('chromeUrl', downloadLinks.chromeId)) !== null && _b !== void 0 ? _b : '';
    links.edge = (_c = walletBook.renderTemplate('edgeUrl', downloadLinks.edgeId)) !== null && _c !== void 0 ? _c : '';
    links.firefox = (_d = walletBook.renderTemplate('firefoxUrl', downloadLinks.firefoxId)) !== null && _d !== void 0 ? _d : '';
    links.ios =
        (_f = (_e = walletBook.renderTemplate('iosUrl', downloadLinks.iosId)) !== null && _e !== void 0 ? _e : downloadLinks.iosUrl) !== null && _f !== void 0 ? _f : '';
    links.android =
        (_h = (_g = walletBook.renderTemplate('androidUrl', downloadLinks.androidId)) !== null && _g !== void 0 ? _g : downloadLinks.androidUrl) !== null && _h !== void 0 ? _h : '';
    return links;
};

exports.getWalletLinks = getWalletLinks;
