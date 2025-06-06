'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var react = require('react');
var getWalletIconUrl = require('../helpers/getWalletIconUrl.cjs');
require('../helpers/renderTemplate.cjs');
require('../helpers/logger.cjs');
require('@dynamic-labs/utils');
var getWalletIconData = require('../helpers/getWalletIconData.cjs');
var WalletBookContext = require('../context/WalletBookContext.cjs');

const WalletBookWalletIcon = (_a) => {
    var { walletKey, isGroup, children } = _a, props = _tslib.__rest(_a, ["walletKey", "isGroup", "children"]);
    const { walletBook } = WalletBookContext.useWalletBookContext();
    const [imgError, setImgError] = react.useState(false);
    const { walletIconUrl, walletIconAlt } = getWalletIconData.getWalletIconData(walletBook, walletKey, isGroup);
    const defaultWalletIconUrl = getWalletIconUrl.getDefaultWalletIconUrl();
    if (!walletIconUrl) {
        return react.createElement(react.Fragment, {}, children);
    }
    const onError = () => {
        setImgError(true);
    };
    return react.createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: walletIconAlt, key: walletKey, onError: onError, src: imgError ? defaultWalletIconUrl : walletIconUrl }), children);
};
const WalletIcon = (_a) => {
    var { icon, walletKey, isGroup, children } = _a, props = _tslib.__rest(_a, ["icon", "walletKey", "isGroup", "children"]);
    if (!icon) {
        return react.createElement(WalletBookWalletIcon, Object.assign({ children,
            isGroup,
            walletKey }, props));
    }
    return react.createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: walletKey, key: walletKey, src: icon }), children);
};

exports.WalletIcon = WalletIcon;
