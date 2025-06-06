export type EncryptedMessage = {
    encryptedMessage: string;
    iv: string;
};
/**
 * Encrypts a message using AES-GCM encryption with a shared secret key
 * @param sharedSecret - Hexadecimal string representing the shared secret key
 * @param message - The plaintext message to encrypt
 * @param additionalData - Additional data to include in the encryption
 * @returns Object containing:
 *   - encryptedMessage: Base64 encoded encrypted message
 *   - iv: Hexadecimal initialization vector used for encryption
 */
export declare const encryptMessage: (sharedSecret: string, message: string, additionalData?: BufferSource) => Promise<EncryptedMessage>;
