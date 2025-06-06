'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');

/**
 * Converts a CryptoKey public key to its hexadecimal string representation.
 *
 * @param publicKey - The public CryptoKey to convert. Must be extractable.
 * @returns A Promise that resolves to the hexadecimal string representation of the public key.
 *
 * @example
 * const pair = await createKeyPair(...);
 * const hexString = await convertPublicKeyCryptoKeyToHex(pair.publicKey);
 */
const convertPublicKeyCryptoKeyToHex = (publicKey) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (!publicKey.extractable) {
        throw new Error('CryptoKey must be extractable to convert to hex.');
    }
    // Export the CryptoKey to a raw ArrayBuffer
    const exportedKey = yield crypto.subtle.exportKey('raw', publicKey);
    // Convert the ArrayBuffer to a hex string
    const byteArray = new Uint8Array(exportedKey);
    return encodeURIComponent(Array.from(byteArray)
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join(''));
});

exports.convertPublicKeyCryptoKeyToHex = convertPublicKeyCryptoKeyToHex;
