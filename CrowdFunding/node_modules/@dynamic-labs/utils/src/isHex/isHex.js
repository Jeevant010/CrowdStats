'use client'
/**
 * Checks if the provided string is a valid hexadecimal string.
 * @param str The string to check.
 * @returns `true` if the string is a valid hexadecimal string, `false` otherwise.
 */
const isHex = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    const normalizedStr = str.startsWith('0x') ? str.substring(2) : str;
    const regex = /^[0-9a-fA-F]+$/;
    return regex.test(normalizedStr);
};

export { isHex };
