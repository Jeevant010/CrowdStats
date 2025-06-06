'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { useAllowClose } from '../../../utils/hooks/useAuthLayoutChecks/useAllowClose/useAllowClose.js';
import { useKeyboardEventListener } from '../../../utils/hooks/useKeyboardEventListener/useKeyboardEventListener.js';

const ModalComponent = ({ children, handleClose, withBackdrop = true, whiteList, }) => {
    const { allowsClosing } = useAllowClose();
    const onBackdropClick = useCallback((e) => {
        if (!allowsClosing)
            return;
        e.stopPropagation();
        handleClose(e);
    }, [allowsClosing, handleClose]);
    useKeyboardEventListener({
        disabled: !allowsClosing,
        inputKey: 'Escape',
        onKeyPressed: handleClose,
    });
    return (jsxs(ReactFocusLock, { className: 'modal-component__container', whiteList: whiteList, children: [withBackdrop && (jsx("div", { "data-testid": 'portal-backdrop', role: 'button', onClick: onBackdropClick, tabIndex: 0, "aria-label": 'Close modal', className: 'modal-component__backdrop' })), jsx("div", { children: children })] }));
};

export { ModalComponent };
