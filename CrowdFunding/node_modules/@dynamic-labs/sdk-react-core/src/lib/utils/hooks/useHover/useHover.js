'use client'
import { useState } from 'react';

const useHover = ({ initialValue = false, falseOnClick = false, onHover, onHoverOff, }) => {
    const [hover, setHover] = useState(initialValue);
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

export { useHover };
