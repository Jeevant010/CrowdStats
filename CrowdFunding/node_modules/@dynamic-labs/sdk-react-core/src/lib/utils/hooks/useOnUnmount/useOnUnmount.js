'use client'
import { useRef, useEffect } from 'react';

/** Min ms that need to pass before the component is able to call the callback on unmount */
const MIN_EVENT_TIME = 10;
const useOnUnmount = (callback) => {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;
    useEffect(() => {
        const mountedAt = new Date();
        return () => {
            // Avoid calling callback as cause of a React Strict Mode rerender
            if (new Date().getTime() - mountedAt.getTime() < MIN_EVENT_TIME)
                return;
            callbackRef.current();
        };
    }, []);
};

export { useOnUnmount };
