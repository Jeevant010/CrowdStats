'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@dynamic-labs/utils');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
var OverlayCard = require('../../OverlayCard/OverlayCard.cjs');
var Dropdown = require('../Dropdown/Dropdown.cjs');

const MenuList = ({ isOpen, onClickClose, popperProps, dropdownClassName, dropdownStyle, overlayCardClassName, overlayCardStyle, className, style, children, mobileTitle, }) => {
    if (utils.isMobile())
        return (jsxRuntime.jsxs(OverlayCard.OverlayCard, { isOpen: isOpen, onClose: onClickClose, className: classNames.classNames(overlayCardClassName, className), style: Object.assign(Object.assign({}, style), overlayCardStyle), children: [jsxRuntime.jsx(OverlayCard.OverlayCard.Header, { children: mobileTitle }), jsxRuntime.jsx(OverlayCard.OverlayCard.Content, { removePadding: true, children: jsxRuntime.jsx("div", { className: 'menu-list__overlay-card__container', children: children }) })] }));
    return (jsxRuntime.jsx(Dropdown.Dropdown, Object.assign({ isOpen: isOpen, onClickOutside: onClickClose, onScroll: onClickClose, className: classNames.classNames(dropdownClassName, className), style: Object.assign(Object.assign({}, style), dropdownStyle) }, popperProps, { children: children })));
};

exports.MenuList = MenuList;
