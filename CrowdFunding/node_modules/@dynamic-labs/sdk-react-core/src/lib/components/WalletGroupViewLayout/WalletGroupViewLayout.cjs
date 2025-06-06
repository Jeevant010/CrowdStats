'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var IconWithSpinner = require('../IconWithSpinner/IconWithSpinner.cjs');
var Typography = require('../Typography/Typography.cjs');

const WalletGroupViewLayout = ({ icon, title, titleCopyKey, children }) => (jsxRuntime.jsxs("div", { className: 'wallet-group-view-layout__container', children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { className: 'wallet-group-view-layout__icon', Icon: icon, iconSize: 96 }), jsxRuntime.jsxs("div", { className: 'wallet-group-view-layout__body', children: [jsxRuntime.jsx(Typography.Typography, { className: 'wallet-group-view-layout__title', as: 'p', color: 'secondary', variant: 'body_normal', copykey: titleCopyKey, children: title }), jsxRuntime.jsx("div", { className: 'wallet-group-view-layout__list', children: children })] })] }));

exports.WalletGroupViewLayout = WalletGroupViewLayout;
