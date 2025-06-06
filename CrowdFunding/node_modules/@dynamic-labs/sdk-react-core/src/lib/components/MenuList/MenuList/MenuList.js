'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { isMobile } from '@dynamic-labs/utils';
import { classNames } from '../../../utils/functions/classNames/classNames.js';
import { OverlayCard } from '../../OverlayCard/OverlayCard.js';
import { Dropdown } from '../Dropdown/Dropdown.js';

const MenuList = ({ isOpen, onClickClose, popperProps, dropdownClassName, dropdownStyle, overlayCardClassName, overlayCardStyle, className, style, children, mobileTitle, }) => {
    if (isMobile())
        return (jsxs(OverlayCard, { isOpen: isOpen, onClose: onClickClose, className: classNames(overlayCardClassName, className), style: Object.assign(Object.assign({}, style), overlayCardStyle), children: [jsx(OverlayCard.Header, { children: mobileTitle }), jsx(OverlayCard.Content, { removePadding: true, children: jsx("div", { className: 'menu-list__overlay-card__container', children: children }) })] }));
    return (jsx(Dropdown, Object.assign({ isOpen: isOpen, onClickOutside: onClickClose, onScroll: onClickClose, className: classNames(dropdownClassName, className), style: Object.assign(Object.assign({}, style), dropdownStyle) }, popperProps, { children: children })));
};

export { MenuList };
