'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var isGlobalWalletPopup = require('../../shared/utils/functions/isGlobalWalletPopup/isGlobalWalletPopup.cjs');

const ModalHeader = ({ alignContent, children, leading, displayLeading = true, trailing, displayTrailing = true, style, displayBorder, description, variant = 'default', }) => {
    const hasLeading = displayLeading && leading && React.Children.count(leading);
    const hasTrailing = displayTrailing && trailing && React.Children.count(trailing);
    const trailingClassName = classNames.classNames('modal-header__content__trailing', {
        'modal-header__content__trailing--empty': !hasTrailing,
    });
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('modal-header', {
            'modal-header--border': displayBorder,
            'modal-header--empty': !hasLeading && !children && !hasTrailing,
            'modal-header--filled': variant === 'filled',
        }), style: style, children: [jsxRuntime.jsxs("div", { className: classNames.classNames('modal-header__content', alignContent &&
                    `modal-header__content--align-content-${alignContent}`), children: [displayLeading && (jsxRuntime.jsx("div", { className: classNames.classNames('modal-header__content__leading', {
                            'modal-header__content__leading--empty': !hasLeading,
                        }), children: leading })), children, isGlobalWalletPopup.isGlobalWalletPopup() && (jsxRuntime.jsx("div", { id: 'modal-header-gw-menu', className: trailingClassName })), displayTrailing && !isGlobalWalletPopup.isGlobalWalletPopup() && (jsxRuntime.jsx("div", { className: trailingClassName, children: trailing }))] }), description] }));
};

exports.ModalHeader = ModalHeader;
