'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** Return element's top-left position relative to root */
const getChildPosition = (root, element) => {
    const rootRect = root.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return {
        left: elementRect.x - rootRect.x,
        top: elementRect.y - rootRect.y,
    };
};

exports.getChildPosition = getChildPosition;
