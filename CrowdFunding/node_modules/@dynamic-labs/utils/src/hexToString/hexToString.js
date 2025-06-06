'use client'
/**
 * Converts a hexadecimal string to a regular string by interpreting each pair of characters in the
 * hexadecimal string as a byte in ASCII. It automatically handles hex strings prefixed with '0x'.
 *
 * @param {string} hexString - The hexadecimal string to convert. It can optionally start with '0x'.
 * @returns {string} The decoded ASCII string.
 *
 * @example
 * hexToString('68656c6c6f'); // returns 'hello'
 * hexToString('0x68656c6c6f'); // also returns 'hello'
 */
const hexToString = (hexString) => {
    const normalizedHexString = hexString.startsWith('0x')
        ? hexString.substring(2)
        : hexString;
    let text = '';
    // Ensure we only process complete pairs by rounding down to the nearest even length
    const length = normalizedHexString.length - (normalizedHexString.length % 2);
    for (let i = 0; i < length; i += 2) {
        const hexCode = normalizedHexString.substring(i, i + 2);
        const decimal = parseInt(hexCode, 16);
        text += String.fromCharCode(decimal);
    }
    return text;
};

export { hexToString };
