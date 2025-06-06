'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
var useFetchNameService = require('../../../widgets/DynamicWidget/hooks/useFetchNameService/useFetchNameService.cjs');
var Button = require('../../Button/Button.cjs');
var Typography = require('../../Typography/Typography.cjs');

const UserWallet = ({ wallet, onSelect }) => {
    const nameService = useFetchNameService.useFetchNameService(wallet);
    return (jsxRuntime.jsx(Button.Button, { buttonClassName: 'user-wallet', buttonVariant: 'card', onClick: () => onSelect === null || onSelect === void 0 ? void 0 : onSelect(), children: jsxRuntime.jsxs("div", { className: 'user-wallet__info', children: [(nameService === null || nameService === void 0 ? void 0 : nameService.avatar) && (jsxRuntime.jsx("div", { className: 'user-wallet__info__icon user-wallet__info__icon--avatar', children: jsxRuntime.jsx("img", { src: nameService.avatar, alt: '' }) })), !(nameService === null || nameService === void 0 ? void 0 : nameService.avatar) && (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: wallet.key, icon: wallet.connector.metadata.icon, className: 'user-wallet__info__icon' })), jsxRuntime.jsxs("div", { className: 'user-wallet__info__address', children: [!(nameService === null || nameService === void 0 ? void 0 : nameService.name) && (jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_normal', children: shortenWalletAddress.shortenWalletAddress(wallet.address) })), (nameService === null || nameService === void 0 ? void 0 : nameService.name) && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_normal', children: nameService.name }), jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_small', color: 'secondary', children: shortenWalletAddress.shortenWalletAddress(wallet.address) })] }))] })] }) }, wallet.id));
};

exports.UserWallet = UserWallet;
