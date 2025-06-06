'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../Typography/Typography.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

/** An outlined chip component that displays a label and optional leading and trailing icons. */
const Chip = ({ children, leading, trailing, className, }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('chip', className), children: [Boolean(leading) && jsxRuntime.jsx("div", { className: 'chip--leading', children: leading }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', children: children }), Boolean(trailing) && jsxRuntime.jsx("div", { className: 'chip--trailing', children: trailing })] }));

exports.Chip = Chip;
