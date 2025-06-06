'use client'
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

export { debounce };
