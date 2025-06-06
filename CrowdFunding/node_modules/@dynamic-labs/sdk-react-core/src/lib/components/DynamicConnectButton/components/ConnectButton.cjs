'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var TypographyButton = require('../../TypographyButton/TypographyButton.cjs');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');

const ConnectButton = ({ buttonClassName, buttonContainerClassName, onClick, isActive, isLoading, children, copykey, }) => (jsxRuntime.jsx("div", { className: buttonContainerClassName, children: jsxRuntime.jsx(TypographyButton.TypographyButton, { dataTestId: 'ConnectButton', onClick: onClick, buttonClassName: classNames.classNames('connect-button', buttonClassName), loading: isLoading && isActive, disabled: isLoading && isActive, buttonVariant: 'primary', buttonPadding: 'small', typographyProps: {
            weight: 'regular',
        }, copykey: copykey, children: children }) }));

exports.ConnectButton = ConnectButton;
