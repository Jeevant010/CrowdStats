'use client'
import { useRef, useEffect } from 'react';

const useIsFirstRender = () => {
    const isFirst = useRef(true);
    // force it to be false on second client render only avoiding SSR issues
    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
        }
    }, []);
    return isFirst.current;
};

export { useIsFirstRender };
