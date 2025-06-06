'use client'
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef, useState, useCallback } from 'react';
import { Icon } from '../../../../components/Icon/Icon.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import { Dropdown } from '../../../../components/MenuList/Dropdown/Dropdown.js';
import { DropdownMenu } from '../../../../components/MenuList/DropdownMenu/DropdownMenu.js';
import { ReactComponent as SvgThreeDots } from '../../../../shared/assets/three-dots.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';

const DotsMenu = ({ options, buttonClassName, buttonClassNameWithOpenMenu, direction = 'right', iconOverride, }) => {
    const dotsMenuRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const handleIconClick = useCallback(() => {
        // Use setTimeout here to prevent React 17 from triggering a click event
        // when the dropdown is rendered.
        setTimeout(() => setShowMenu(true), 0);
    }, [setShowMenu]);
    const handleMenuClose = useCallback(() => {
        setShowMenu(false);
    }, [setShowMenu]);
    return (jsxs(Fragment, { children: [jsx(IconButton, { ref: dotsMenuRef, onClick: handleIconClick, "data-testid": 'dotsMenu', className: showMenu ? buttonClassNameWithOpenMenu : buttonClassName, children: iconOverride ? (iconOverride) : (jsx(Icon, { children: jsx(SvgThreeDots, {}) })) }), jsx(Dropdown, { isOpen: showMenu, onClickOutside: handleMenuClose, onScroll: handleMenuClose, anchorRef: dotsMenuRef, anchorOrigin: direction === 'right' ? 'bottom-left' : 'top-right', transformOrigin: direction === 'right' ? 'top-left' : 'bottom-right', children: jsx(DropdownMenu, { options: options, setShowMenu: setShowMenu }) })] }));
};

export { DotsMenu };
