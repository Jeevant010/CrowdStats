'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ReactFocusLock = require('react-focus-lock');
var useAllowClose = require('../../../utils/hooks/useAuthLayoutChecks/useAllowClose/useAllowClose.cjs');
var useKeyboardEventListener = require('../../../utils/hooks/useKeyboardEventListener/useKeyboardEventListener.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactFocusLock__default = /*#__PURE__*/_interopDefaultLegacy(ReactFocusLock);

const ModalComponent = ({ children, handleClose, withBackdrop = true, whiteList, }) => {
    const { allowsClosing } = useAllowClose.useAllowClose();
    const onBackdropClick = React.useCallback((e) => {
        if (!allowsClosing)
            return;
        e.stopPropagation();
        handleClose(e);
    }, [allowsClosing, handleClose]);
    useKeyboardEventListener.useKeyboardEventListener({
        disabled: !allowsClosing,
        inputKey: 'Escape',
        onKeyPressed: handleClose,
    });
    return (jsxRuntime.jsxs(ReactFocusLock__default["default"], { className: 'modal-component__container', whiteList: whiteList, children: [withBackdrop && (jsxRuntime.jsx("div", { "data-testid": 'portal-backdrop', role: 'button', onClick: onBackdropClick, tabIndex: 0, "aria-label": 'Close modal', className: 'modal-component__backdrop' })), jsxRuntime.jsx("div", { children: children })] }));
};

exports.ModalComponent = ModalComponent;
