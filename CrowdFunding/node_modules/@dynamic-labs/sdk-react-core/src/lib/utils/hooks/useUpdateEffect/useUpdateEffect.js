'use client'
import { useEffect } from 'react';
import { useIsFirstRender } from '../useIsFirstRender/useIsFirstRender.js';

const useUpdateEffect = (effect, deps) => {
    const isFirst = useIsFirstRender();
    useEffect(() => {
        if (!isFirst) {
            return effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

export { useUpdateEffect };
