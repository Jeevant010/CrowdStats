'use client'
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function sleep(timeoutMs, valueToResolve) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(valueToResolve), timeoutMs);
    });
}

export { sleep };
