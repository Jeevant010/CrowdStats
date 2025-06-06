'use client'
/**
 * Type guard to check if a value is an encrypted message
 * @param value - Value to check
 * @returns boolean indicating if the value matches the EncryptedMessage format
 */
const isEncryptedMessage = (value) => {
    if (!value ||
        typeof value !== 'object' ||
        Array.isArray(value) ||
        value === null ||
        typeof value === 'string') {
        return false;
    }
    const candidate = value;
    const keys = Object.keys(candidate);
    return (keys.length === 2 &&
        keys.includes('encryptedMessage') &&
        keys.includes('iv') &&
        typeof candidate['encryptedMessage'] === 'string' &&
        typeof candidate['iv'] === 'string');
};

export { isEncryptedMessage };
