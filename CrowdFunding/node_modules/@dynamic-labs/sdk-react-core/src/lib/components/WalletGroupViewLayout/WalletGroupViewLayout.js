'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { IconWithSpinner } from '../IconWithSpinner/IconWithSpinner.js';
import { Typography } from '../Typography/Typography.js';

const WalletGroupViewLayout = ({ icon, title, titleCopyKey, children }) => (jsxs("div", { className: 'wallet-group-view-layout__container', children: [jsx(IconWithSpinner, { className: 'wallet-group-view-layout__icon', Icon: icon, iconSize: 96 }), jsxs("div", { className: 'wallet-group-view-layout__body', children: [jsx(Typography, { className: 'wallet-group-view-layout__title', as: 'p', color: 'secondary', variant: 'body_normal', copykey: titleCopyKey, children: title }), jsx("div", { className: 'wallet-group-view-layout__list', children: children })] })] }));

export { WalletGroupViewLayout };
