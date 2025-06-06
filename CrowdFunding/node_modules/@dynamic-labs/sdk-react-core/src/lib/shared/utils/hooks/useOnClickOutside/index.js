'use client'
import { useRef, useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
    const handlerRef = useRef(handler);
    handlerRef.current = handler;
    useEffect(() => {
        if (!ref)
            return;
        const listener = (event) => {
            event.stopPropagation();
            const realTarget = event.composedPath().shift();
            const refCurrent = 'current' in ref ? ref.current : ref;
            if (!refCurrent ||
                refCurrent.contains(event.currentTarget) ||
                refCurrent.contains(realTarget)) {
                return;
            }
            handlerRef.current(event);
        };
        document.addEventListener('touchstart', listener);
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('click', listener);
        };
    }, [ref]);
};

export { useOnClickOutside };
