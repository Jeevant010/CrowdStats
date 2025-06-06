'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Toggle = ({ icon, variant = 'primary', value, onChange, dataTestId, className, style, }) => (jsxRuntime.jsxs("label", { className: classNames.classNames('toggle', className), style: style, children: [jsxRuntime.jsx("input", { type: 'checkbox', className: 'toggle--input', "data-testid": dataTestId, checked: value, onChange: () => onChange === null || onChange === void 0 ? void 0 : onChange(!value) }), jsxRuntime.jsx("div", { className: classNames.classNames('toggle--content', `toggle--content__variant-${variant}`), children: jsxRuntime.jsx("div", { className: 'toggle--knob', children: icon }) })] }));

exports.Toggle = Toggle;
