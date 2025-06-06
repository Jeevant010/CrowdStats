'use client'
import { __rest } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useEffect } from 'react';
import { useOnClickOutside } from '../../../shared/utils/hooks/useOnClickOutside/index.js';
import { classNames } from '../../../utils/functions/classNames/classNames.js';
import { useForwardedRef } from '../../../utils/hooks/useForwardedRef/useForwardedRef.js';
import { useTransition } from '../../../utils/hooks/useTransition/useTransition.js';
import { Popper } from '../../Popper/Popper/Popper.js';
import { usePopper } from '../../Popper/PopperContext/PopperContext.js';
import { watchToScrollInHierarchy } from '../utils/watchToScrollInHierarchy/watchToScrollInHierarchy.js';

const IN_DURATION = 300;
const OUT_DURATION = 300;
const Dropdown = forwardRef((_a, ref) => {
    var { children, isOpen, onClickOutside, onScroll, className, style, maxHeight = 300 } = _a, popperProps = __rest(_a, ["children", "isOpen", "onClickOutside", "onScroll", "className", "style", "maxHeight"]);
    // Get popper container
    const { containerRef } = usePopper();
    // ==============================
    // OPEN/CLOSE LOGIC
    // ==============================
    const contentRef = useForwardedRef(ref);
    // Close on click outside
    useOnClickOutside(contentRef, () => onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside());
    // Listen for scroll events to auto close
    useEffect(() => {
        if (!containerRef.current || !popperProps.anchorRef.current)
            return;
        return watchToScrollInHierarchy(containerRef.current, popperProps.anchorRef.current, () => onScroll === null || onScroll === void 0 ? void 0 : onScroll());
    }, [containerRef, popperProps.anchorRef, onScroll]);
    // ==============================
    // ANIMATIONS
    // ==============================
    const { mount, stage, currentDuration } = useTransition({
        inDuration: IN_DURATION,
        isShown: isOpen,
        outDuration: OUT_DURATION,
    });
    const transitionClassName = classNames({
        'dropdown--entering': stage === 'ENTERING',
        'dropdown--exiting': stage === 'EXITING',
    });
    if (!mount)
        return null;
    return (jsx(Popper, Object.assign({}, popperProps, { ref: contentRef, children: jsx("div", { className: classNames('dropdown', transitionClassName, className), style: Object.assign({ '--max-height': `${maxHeight}px`, animationDuration: `${currentDuration}ms` }, style), children: children }) })));
});
Dropdown.displayName = 'Dropdown';

export { Dropdown };
