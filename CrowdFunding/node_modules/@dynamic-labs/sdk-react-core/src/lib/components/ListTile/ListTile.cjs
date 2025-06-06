'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var Typography = require('../Typography/Typography.cjs');

const ListTile = ({ children, onClick, leading, disabled = false, trailing, style, className = '', dataTestId, copykey, }) => (jsxRuntime.jsxs("button", { "data-testid": dataTestId, type: 'button', className: classNames.classNames(className, 'list-tile'), onClick: onClick, style: style, disabled: disabled, children: [leading, jsxRuntime.jsx("div", { className: 'list-tile__children', children: jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', as: 'span', copykey: copykey, children: children }) }), trailing] }));

exports.ListTile = ListTile;
