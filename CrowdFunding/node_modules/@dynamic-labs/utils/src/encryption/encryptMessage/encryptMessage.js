'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';

/**
 * Encrypts a message using AES-GCM encryption with a shared secret key
 * @param sharedSecret - Hexadecimal string representing the shared secret key
 * @param message - The plaintext message to encrypt
 * @param additionalData - Additional data to include in the encryption
 * @returns Object containing:
 *   - encryptedMessage: Base64 encoded encrypted message
 *   - iv: Hexadecimal initialization vector used for encryption
 */
const encryptMessage = (sharedSecret, message, additionalData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const encoder = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const data = encoder.encode(message);
    const sharedSecretByteArray = new Uint8Array((_b = (_a = sharedSecret.match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map((byte) => parseInt(byte, 16))) !== null && _b !== void 0 ? _b : []);
    // Import the ArrayBuffer as a CryptoKey
    const sharedSecretCryptoKey = yield crypto.subtle.importKey('raw', sharedSecretByteArray.buffer, 'AES-GCM', true, ['encrypt', 'decrypt']);
    const encryptParams = {
        iv,
        name: 'AES-GCM',
    };
    if (additionalData) {
        encryptParams.additionalData = additionalData;
    }
    const encryptedMessage = yield crypto.subtle.encrypt(encryptParams, sharedSecretCryptoKey, data);
    return {
        encryptedMessage: encodeURIComponent(arrayBufferToBase64(encryptedMessage)),
        iv: encodeURIComponent(uint8ArrayToHex(iv)),
    };
});
const arrayBufferToBase64 = (buffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
};
const uint8ArrayToHex = (arr) => Array.from(arr)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

export { encryptMessage };
