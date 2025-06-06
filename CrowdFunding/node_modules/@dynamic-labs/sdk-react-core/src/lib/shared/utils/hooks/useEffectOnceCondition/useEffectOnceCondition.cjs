'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * Hook that runs an effect only once based on a condition.
 *
 * @param {Function} effect - The effect callback function to run.
 * @param {boolean} condition - The condition that determines whether the effect should run.
 */
const useEffectOnceCondition = (effect, condition) => {
    const hasRun = React.useRef(false);
    const effectRef = React.useRef(effect);
    effectRef.current = effect;
    React.useEffect(() => {
        if (condition && !hasRun.current) {
            effectRef.current();
            hasRun.current = true;
        }
    }, [condition]);
};

exports.useEffectOnceCondition = useEffectOnceCondition;
