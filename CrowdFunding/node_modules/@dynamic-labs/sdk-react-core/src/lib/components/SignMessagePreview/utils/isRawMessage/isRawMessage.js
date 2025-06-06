'use client'
const isRawMessage = (data) => {
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    return typeof data.raw === 'string';
};

export { isRawMessage };
