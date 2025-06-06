'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var react = require('react');
var getWalletIconUrl = require('../helpers/getWalletIconUrl.cjs');
require('../helpers/renderTemplate.cjs');
require('../helpers/logger.cjs');
require('@dynamic-labs/utils');
var getBrandIconUrl = require('../helpers/getBrandIconUrl.cjs');

const BrandIcon = (_a) => {
    var { brand, walletKey } = _a, props = _tslib.__rest(_a, ["brand", "walletKey"]);
    const [imgError, setImgError] = react.useState(false);
    const walletIconUrl = getBrandIconUrl.getBrandIconUrl(brand);
    const defaultWalletIconUrl = getWalletIconUrl.getDefaultWalletIconUrl();
    if (!walletIconUrl) {
        return react.createElement(react.Fragment, {});
    }
    const onError = () => {
        setImgError(true);
    };
    return react.createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: brand.alt, onError: onError, src: imgError ? defaultWalletIconUrl : walletIconUrl }));
};

exports.BrandIcon = BrandIcon;
