'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var TextButton = require('../TextButton/TextButton.cjs');
var Tooltip = require('../Tooltip/Tooltip.cjs');
var TypographyButton = require('../TypographyButton/TypographyButton.cjs');

const CopyButton = ({ children, className = '', textToCopy, onClick, variant = 'text', copykey, buttonPadding = 'small', buttonVariant = 'primary', buttonClassName = '', startSlot, disabled, }) => {
    const [copied, setCopied] = React.useState(false);
    const [buttonRef, setButtonRef] = React.useState(null);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        onClick === null || onClick === void 0 ? void 0 : onClick();
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [variant === 'text' ? (jsxRuntime.jsx(TextButton.TextButton, { className: classNames.classNames('copy-button__container', className), onClick: () => copyToClipboard(), onMouseLeave: () => setCopied(false), copykey: copykey, disabled: disabled, children: children })) : (jsxRuntime.jsx(TypographyButton.TypographyButton, { buttonRef: setButtonRef, expanded: true, buttonPadding: buttonPadding, buttonVariant: buttonVariant, buttonClassName: buttonClassName, onClick: () => copyToClipboard(), copykey: copykey, startSlot: startSlot, disabled: disabled, children: children })), jsxRuntime.jsx(Tooltip.Tooltip, { className: 'copy-button__tooltip', content: copied ? 'Copied' : 'Copy', targetRef: buttonRef })] }));
};

exports.CopyButton = CopyButton;
