'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const RadioButton = ({ children, checked, value, name, disabled = false, className = '', onChange, }) => {
    const radioId = `${name}_${value}`;
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('radio-button', className), children: [jsxRuntime.jsx("input", { type: 'radio', id: radioId, name: name, value: value, disabled: disabled, defaultChecked: checked, onChange: onChange }), jsxRuntime.jsx("label", { htmlFor: radioId, children: children })] }));
};

exports.RadioButton = RadioButton;
