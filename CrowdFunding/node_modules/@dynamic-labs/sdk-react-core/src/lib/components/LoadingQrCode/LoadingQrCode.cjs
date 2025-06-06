'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var IconWithSpinner = require('../IconWithSpinner/IconWithSpinner.cjs');

const LoadingQrCode = ({ Icon, logoSize }) => (jsxRuntime.jsx("div", { className: 'qrcode__container qrcode', "data-testid": 'loading-qrcode', children: jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: Icon, iconSize: logoSize, isSpinning: true, className: 'qrcode__icon' }) }));

exports.LoadingQrCode = LoadingQrCode;
