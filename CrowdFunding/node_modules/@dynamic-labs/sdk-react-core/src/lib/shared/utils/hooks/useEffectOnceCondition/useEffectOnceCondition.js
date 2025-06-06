'use client'
import { useRef, useEffect } from 'react';

/**
 * Hook that runs an effect only once based on a condition.
 *
 * @param {Function} effect - The effect callback function to run.
 * @param {boolean} condition - The condition that determines whether the effect should run.
 */
const useEffectOnceCondition = (effect, condition) => {
    const hasRun = useRef(false);
    const effectRef = useRef(effect);
    effectRef.current = effect;
    useEffect(() => {
        if (condition && !hasRun.current) {
            effectRef.current();
            hasRun.current = true;
        }
    }, [condition]);
};

export { useEffectOnceCondition };
