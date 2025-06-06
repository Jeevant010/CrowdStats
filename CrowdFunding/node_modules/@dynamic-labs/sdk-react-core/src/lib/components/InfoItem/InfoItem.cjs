'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var Typography = require('../Typography/Typography.cjs');

const InfoItem = ({ title, content, Icon, className = '', iconClassName = '', textClassName = '', }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('info-item__container', className), children: [jsxRuntime.jsx("div", { className: classNames.classNames('info-item__icon-container', iconClassName, {
                'icon-container--has-content': Boolean(content),
            }), children: jsxRuntime.jsx(Icon, {}) }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(Typography.Typography, { as: 'h2', className: textClassName, variant: 'body_normal', color: 'primary', weight: 'medium', children: title }), content && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', className: 'info-item__secondary-text', children: content }))] })] }));

exports.InfoItem = InfoItem;
