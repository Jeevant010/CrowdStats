'use client'
import { __rest } from '../../_virtual/_tslib.js';
import { createElement, useState, Fragment } from 'react';
import { getDefaultWalletIconUrl } from '../helpers/getWalletIconUrl.js';
import '../helpers/renderTemplate.js';
import '../helpers/logger.js';
import '@dynamic-labs/utils';
import { getWalletIconData } from '../helpers/getWalletIconData.js';
import { useWalletBookContext } from '../context/WalletBookContext.js';

const WalletBookWalletIcon = (_a) => {
    var { walletKey, isGroup, children } = _a, props = __rest(_a, ["walletKey", "isGroup", "children"]);
    const { walletBook } = useWalletBookContext();
    const [imgError, setImgError] = useState(false);
    const { walletIconUrl, walletIconAlt } = getWalletIconData(walletBook, walletKey, isGroup);
    const defaultWalletIconUrl = getDefaultWalletIconUrl();
    if (!walletIconUrl) {
        return createElement(Fragment, {}, children);
    }
    const onError = () => {
        setImgError(true);
    };
    return createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: walletIconAlt, key: walletKey, onError: onError, src: imgError ? defaultWalletIconUrl : walletIconUrl }), children);
};
const WalletIcon = (_a) => {
    var { icon, walletKey, isGroup, children } = _a, props = __rest(_a, ["icon", "walletKey", "isGroup", "children"]);
    if (!icon) {
        return createElement(WalletBookWalletIcon, Object.assign({ children,
            isGroup,
            walletKey }, props));
    }
    return createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: walletKey, key: walletKey, src: icon }), children);
};

export { WalletIcon };
