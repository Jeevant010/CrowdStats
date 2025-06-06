'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../../shared/utils/hooks/useOnClickOutside/index.cjs');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
var useForwardedRef = require('../../../utils/hooks/useForwardedRef/useForwardedRef.cjs');
var useTransition = require('../../../utils/hooks/useTransition/useTransition.cjs');
var Popper = require('../../Popper/Popper/Popper.cjs');
var PopperContext = require('../../Popper/PopperContext/PopperContext.cjs');
var watchToScrollInHierarchy = require('../utils/watchToScrollInHierarchy/watchToScrollInHierarchy.cjs');

const IN_DURATION = 300;
const OUT_DURATION = 300;
const Dropdown = React.forwardRef((_a, ref) => {
    var { children, isOpen, onClickOutside, onScroll, className, style, maxHeight = 300 } = _a, popperProps = _tslib.__rest(_a, ["children", "isOpen", "onClickOutside", "onScroll", "className", "style", "maxHeight"]);
    // Get popper container
    const { containerRef } = PopperContext.usePopper();
    // ==============================
    // OPEN/CLOSE LOGIC
    // ==============================
    const contentRef = useForwardedRef.useForwardedRef(ref);
    // Close on click outside
    index.useOnClickOutside(contentRef, () => onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside());
    // Listen for scroll events to auto close
    React.useEffect(() => {
        if (!containerRef.current || !popperProps.anchorRef.current)
            return;
        return watchToScrollInHierarchy.watchToScrollInHierarchy(containerRef.current, popperProps.anchorRef.current, () => onScroll === null || onScroll === void 0 ? void 0 : onScroll());
    }, [containerRef, popperProps.anchorRef, onScroll]);
    // ==============================
    // ANIMATIONS
    // ==============================
    const { mount, stage, currentDuration } = useTransition.useTransition({
        inDuration: IN_DURATION,
        isShown: isOpen,
        outDuration: OUT_DURATION,
    });
    const transitionClassName = classNames.classNames({
        'dropdown--entering': stage === 'ENTERING',
        'dropdown--exiting': stage === 'EXITING',
    });
    if (!mount)
        return null;
    return (jsxRuntime.jsx(Popper.Popper, Object.assign({}, popperProps, { ref: contentRef, children: jsxRuntime.jsx("div", { className: classNames.classNames('dropdown', transitionClassName, className), style: Object.assign({ '--max-height': `${maxHeight}px`, animationDuration: `${currentDuration}ms` }, style), children: children }) })));
});
Dropdown.displayName = 'Dropdown';

exports.Dropdown = Dropdown;
