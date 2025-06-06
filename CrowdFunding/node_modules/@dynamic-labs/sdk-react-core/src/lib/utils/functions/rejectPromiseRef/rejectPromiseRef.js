'use client'
const rejectPromiseRef = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
promise, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
error) => {
    if (!promise.current)
        return;
    promise.current.reject(error);
    promise.current = null;
};

export { rejectPromiseRef };
