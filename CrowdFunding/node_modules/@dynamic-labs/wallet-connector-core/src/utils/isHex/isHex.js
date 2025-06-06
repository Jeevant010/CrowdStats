'use client'
const isHex = (value) => {
    if (!value)
        return false;
    if (typeof value !== 'string')
        return false;
    return /^0x[0-9a-fA-F]*$/.test(value);
};

export { isHex };
