'use client'
import { __rest } from '../../_virtual/_tslib.js';
import { useState, createElement, Fragment } from 'react';
import { getDefaultWalletIconUrl } from '../helpers/getWalletIconUrl.js';
import '../helpers/renderTemplate.js';
import '../helpers/logger.js';
import '@dynamic-labs/utils';
import { getBrandIconUrl } from '../helpers/getBrandIconUrl.js';

const BrandIcon = (_a) => {
    var { brand, walletKey } = _a, props = __rest(_a, ["brand", "walletKey"]);
    const [imgError, setImgError] = useState(false);
    const walletIconUrl = getBrandIconUrl(brand);
    const defaultWalletIconUrl = getDefaultWalletIconUrl();
    if (!walletIconUrl) {
        return createElement(Fragment, {});
    }
    const onError = () => {
        setImgError(true);
    };
    return createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: brand.alt, onError: onError, src: imgError ? defaultWalletIconUrl : walletIconUrl }));
};

export { BrandIcon };
