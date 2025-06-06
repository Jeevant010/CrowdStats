'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Icon = require('../../../../components/Icon/Icon.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
var Dropdown = require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
var DropdownMenu = require('../../../../components/MenuList/DropdownMenu/DropdownMenu.cjs');
var threeDots = require('../../../../shared/assets/three-dots.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');

const DotsMenu = ({ options, buttonClassName, buttonClassNameWithOpenMenu, direction = 'right', iconOverride, }) => {
    const dotsMenuRef = React.useRef(null);
    const [showMenu, setShowMenu] = React.useState(false);
    const handleIconClick = React.useCallback(() => {
        // Use setTimeout here to prevent React 17 from triggering a click event
        // when the dropdown is rendered.
        setTimeout(() => setShowMenu(true), 0);
    }, [setShowMenu]);
    const handleMenuClose = React.useCallback(() => {
        setShowMenu(false);
    }, [setShowMenu]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(IconButton.IconButton, { ref: dotsMenuRef, onClick: handleIconClick, "data-testid": 'dotsMenu', className: showMenu ? buttonClassNameWithOpenMenu : buttonClassName, children: iconOverride ? (iconOverride) : (jsxRuntime.jsx(Icon.Icon, { children: jsxRuntime.jsx(threeDots.ReactComponent, {}) })) }), jsxRuntime.jsx(Dropdown.Dropdown, { isOpen: showMenu, onClickOutside: handleMenuClose, onScroll: handleMenuClose, anchorRef: dotsMenuRef, anchorOrigin: direction === 'right' ? 'bottom-left' : 'top-right', transformOrigin: direction === 'right' ? 'top-left' : 'bottom-right', children: jsxRuntime.jsx(DropdownMenu.DropdownMenu, { options: options, setShowMenu: setShowMenu }) })] }));
};

exports.DotsMenu = DotsMenu;
