'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const debounce = (callback, timeout) => {
    let timeoutId;
    const onTimeoutTick = () => {
        callback();
    };
    const debouncedFn = () => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(onTimeoutTick, timeout);
    };
    return debouncedFn;
};

exports.debounce = debounce;
