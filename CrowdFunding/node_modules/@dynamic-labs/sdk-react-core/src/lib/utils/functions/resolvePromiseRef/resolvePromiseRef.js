'use client'
const resolvePromiseRef = (promise, value) => {
    if (!promise.current)
        return;
    promise.current.resolve(value);
    promise.current = null;
};

export { resolvePromiseRef };
