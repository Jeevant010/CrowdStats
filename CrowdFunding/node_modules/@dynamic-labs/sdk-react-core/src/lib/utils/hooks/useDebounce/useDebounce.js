'use client'
import { useRef, useCallback } from 'react';

const useDebounce = (callback, timeout) => {
    const timeoutId = useRef(null);
    const callbackRef = useRef(callback);
    callbackRef.current = callback;
    return useCallback(((...params) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }
        timeoutId.current = window.setTimeout(() => {
            callbackRef.current(...params);
        }, timeout);
    }), [timeout]);
};

export { useDebounce };
