'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useIsomorphicLayoutEffect = require('../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect.cjs');

// https://usehooks-ts.com/react-hook/use-interval
const useInterval = (callback, delay) => {
    const savedCallback = React.useRef(callback);
    // Remember the latest callback if it changes.
    useIsomorphicLayoutEffect.useIsomorphicLayoutEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    React.useEffect(() => {
        // Don't schedule if no delay is specified.
        // Note: 0 is a valid value for delay.
        if (!delay && delay !== 0) {
            return;
        }
        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
    }, [delay]);
};

exports.useInterval = useInterval;
