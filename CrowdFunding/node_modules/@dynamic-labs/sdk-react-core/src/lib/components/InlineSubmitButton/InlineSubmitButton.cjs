'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
var arrowRightBackground = require('../../shared/assets/arrow-right-background.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var IconButton = require('../IconButton/IconButton.cjs');

const InlineSubmitButton = ({ disabled, highlighted, isFocused, isHovered, className, style, emailSubmitButtonInsideInput = false, }) => {
    if (!emailSubmitButtonInsideInput)
        return null;
    return (jsxRuntime.jsx(IconButton.IconButton, { "data-testid": 'in_line_submit_button', type: 'submit', className: classNames.classNames('inline-submit-button', className, {
            'icon-button--active': isFocused || isHovered,
            'icon-button--has-content': highlighted,
        }), disabled: disabled, style: style, children: jsxRuntime.jsx(arrowRightBackground.ReactComponent, {}) }));
};

exports.InlineSubmitButton = InlineSubmitButton;
