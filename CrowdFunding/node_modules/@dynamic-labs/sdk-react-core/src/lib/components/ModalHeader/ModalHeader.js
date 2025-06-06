'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { Children } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { isGlobalWalletPopup } from '../../shared/utils/functions/isGlobalWalletPopup/isGlobalWalletPopup.js';

const ModalHeader = ({ alignContent, children, leading, displayLeading = true, trailing, displayTrailing = true, style, displayBorder, description, variant = 'default', }) => {
    const hasLeading = displayLeading && leading && Children.count(leading);
    const hasTrailing = displayTrailing && trailing && Children.count(trailing);
    const trailingClassName = classNames('modal-header__content__trailing', {
        'modal-header__content__trailing--empty': !hasTrailing,
    });
    return (jsxs("div", { className: classNames('modal-header', {
            'modal-header--border': displayBorder,
            'modal-header--empty': !hasLeading && !children && !hasTrailing,
            'modal-header--filled': variant === 'filled',
        }), style: style, children: [jsxs("div", { className: classNames('modal-header__content', alignContent &&
                    `modal-header__content--align-content-${alignContent}`), children: [displayLeading && (jsx("div", { className: classNames('modal-header__content__leading', {
                            'modal-header__content__leading--empty': !hasLeading,
                        }), children: leading })), children, isGlobalWalletPopup() && (jsx("div", { id: 'modal-header-gw-menu', className: trailingClassName })), displayTrailing && !isGlobalWalletPopup() && (jsx("div", { className: trailingClassName, children: trailing }))] }), description] }));
};

export { ModalHeader };
