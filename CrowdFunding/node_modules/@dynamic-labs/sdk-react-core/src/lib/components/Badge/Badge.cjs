'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Badge = ({ className = '', dot, text, copykey, variant = 'secondary', }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('badge__container', `badge__container__${variant}`, className), children: [dot && jsxRuntime.jsx("span", { "data-testid": 'badge__dot', className: 'badge__dot' }), jsxRuntime.jsx("span", { copykey: copykey, children: text })] }));

exports.Badge = Badge;
