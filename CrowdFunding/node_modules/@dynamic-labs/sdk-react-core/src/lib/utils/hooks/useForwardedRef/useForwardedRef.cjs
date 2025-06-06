'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// Allows access to a forwarded ref's "current" field
// source: https://stackoverflow.com/questions/73015696/whats-the-difference-between-reacts-forwardedref-and-refobject
//
const useForwardedRef = (ref) => {
    const innerRef = React.useRef(null);
    React.useEffect(() => {
        if (!ref)
            return;
        if (typeof ref === 'function') {
            ref(innerRef.current);
        }
        else {
            ref.current = innerRef.current;
        }
    }, [ref, innerRef]);
    return innerRef;
};

exports.useForwardedRef = useForwardedRef;
