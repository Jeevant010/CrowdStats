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
export declare const hexToString: (hexString: string) => string;
