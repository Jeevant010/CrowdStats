'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../../../Typography/Typography.cjs');
var Icon = require('../../../Icon/Icon.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');

const InlineWidgetButton = ({ onClick, children, icon, className }) => (jsxRuntime.jsxs("button", { className: classNames.classNames('inline-widget-button', className), onClick: onClick, children: [icon && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Icon.Icon, { className: 'inline-widget-button__icon', children: icon }), jsxRuntime.jsx("div", { className: 'inline-widget-button__vertical-divider' })] })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'primary', weight: 'medium', children: children })] }));

exports.InlineWidgetButton = InlineWidgetButton;
