/**
 * Derives a shared secret key using ECDH (Elliptic Curve Diffie-Hellman) key agreement protocol.
 * The resulting shared secret can be used for AES-GCM encryption/decryption operations.
 *
 * @param ownPrivateKey - The private key of the current party (CryptoKey format)
 * @param peerPublicKey - The public key of the peer party (CryptoKey format)
 * @returns A Promise that resolves to a hex string representing the derived shared secret
 *          configured for AES-GCM encryption/decryption operations
 */
export declare const deriveSharedSecret: (ownPrivateKey: CryptoKey, peerPublicKey: CryptoKey) => Promise<string>;
