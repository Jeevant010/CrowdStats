'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useDebounce = (callback, timeout) => {
    const timeoutId = React.useRef(null);
    const callbackRef = React.useRef(callback);
    callbackRef.current = callback;
    return React.useCallback(((...params) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }
        timeoutId.current = window.setTimeout(() => {
            callbackRef.current(...params);
        }, timeout);
    }), [timeout]);
};

exports.useDebounce = useDebounce;
