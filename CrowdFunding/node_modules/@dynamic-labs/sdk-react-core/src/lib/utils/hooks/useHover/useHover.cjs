'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useHover = ({ initialValue = false, falseOnClick = false, onHover, onHoverOff, }) => {
    const [hover, setHover] = React.useState(initialValue);
    const handlers = {
        onMouseDown: () => setHover(true),
        onMouseEnter: () => {
            onHover === null || onHover === void 0 ? void 0 : onHover();
            setHover(true);
        },
        onMouseLeave: () => {
            onHoverOff === null || onHoverOff === void 0 ? void 0 : onHoverOff();
            setHover(false);
        },
        onMouseUp: () => setHover(falseOnClick),
    };
    return [hover, handlers];
};

exports.useHover = useHover;
