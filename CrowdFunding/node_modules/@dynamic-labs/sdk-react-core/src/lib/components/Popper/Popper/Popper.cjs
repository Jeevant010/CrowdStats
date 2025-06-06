'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactDom = require('react-dom');
var PopperContent = require('../PopperContent/PopperContent.cjs');
var PopperContext = require('../PopperContext/PopperContext.cjs');
var getChildPosition = require('../utils/getChildPosition/getChildPosition.cjs');

// eslint-disable-next-line multiline-comment-style
/** Allows to render content outside of the current DOM parent and specify a reference position
 * To allow for opening and closing of menus, see MenuList and Dropdown components
 */
const Popper = React.forwardRef(({ anchorRef, anchorOrigin = 'top-left', transformOrigin = 'top-left', children, style, className, }, ref) => {
    const { containerRef } = PopperContext.usePopper();
    const [anchorPosition, setAnchorPosition] = React.useState();
    const container = containerRef.current;
    // Calculates anchor position based on anchorOrigin's relative position to popper's container
    // and sets up scroll listener to close popper
    React.useEffect(() => {
        const container = containerRef.current;
        const anchor = anchorRef.current;
        if (!container || !anchor)
            return;
        setAnchorPosition(getChildPosition.getChildPosition(container, anchor));
    }, [anchorRef, containerRef, setAnchorPosition]);
    /** Position of the anchor's vertex that was selected by anchorOrigin  */
    const anchorOriginPosition = React.useMemo(() => {
        var _a;
        const anchorRect = (_a = anchorRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!anchorPosition || !anchorRect)
            return;
        switch (anchorOrigin) {
            case 'top-left':
                return anchorPosition;
            case 'top-right':
                return Object.assign(Object.assign({}, anchorPosition), { left: anchorPosition.left + anchorRect.width });
            case 'bottom-left':
                return Object.assign(Object.assign({}, anchorPosition), { top: anchorPosition.top + anchorRect.height });
            case 'bottom-right':
                return Object.assign(Object.assign({}, anchorPosition), { left: anchorPosition.left + anchorRect.width, top: anchorPosition.top + anchorRect.height });
            default:
                return undefined;
        }
    }, [anchorPosition, anchorRef, anchorOrigin]);
    if (!anchorOriginPosition || container === null)
        return null;
    return reactDom.createPortal(jsxRuntime.jsx(PopperContent.PopperContent, { ref: ref, transformOrigin: transformOrigin, style: Object.assign(Object.assign({}, anchorOriginPosition), style), className: className, children: children }), container);
});
Popper.displayName = 'Popper';

exports.Popper = Popper;
