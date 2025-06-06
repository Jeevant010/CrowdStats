'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { convertPublicKeyCryptoKeyToHex } from '../convertPublicKeyCryptoKeyToHex/convertPublicKeyCryptoKeyToHex.js';

/**
 * Derives a shared secret key using ECDH (Elliptic Curve Diffie-Hellman) key agreement protocol.
 * The resulting shared secret can be used for AES-GCM encryption/decryption operations.
 *
 * @param ownPrivateKey - The private key of the current party (CryptoKey format)
 * @param peerPublicKey - The public key of the peer party (CryptoKey format)
 * @returns A Promise that resolves to a hex string representing the derived shared secret
 *          configured for AES-GCM encryption/decryption operations
 */
const deriveSharedSecret = (ownPrivateKey, peerPublicKey) => __awaiter(void 0, void 0, void 0, function* () {
    return convertPublicKeyCryptoKeyToHex(yield crypto.subtle.deriveKey({
        name: 'ECDH',
        public: peerPublicKey,
    }, ownPrivateKey, {
        length: 256,
        name: 'AES-GCM',
    }, true, ['encrypt', 'decrypt']));
});

export { deriveSharedSecret };
