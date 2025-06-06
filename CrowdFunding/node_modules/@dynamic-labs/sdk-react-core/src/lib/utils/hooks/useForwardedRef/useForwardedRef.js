'use client'
import { useRef, useEffect } from 'react';

// Allows access to a forwarded ref's "current" field
// source: https://stackoverflow.com/questions/73015696/whats-the-difference-between-reacts-forwardedref-and-refobject
//
const useForwardedRef = (ref) => {
    const innerRef = useRef(null);
    useEffect(() => {
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

export { useForwardedRef };
