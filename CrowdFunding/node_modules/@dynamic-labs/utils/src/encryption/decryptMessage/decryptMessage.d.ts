/**
 * Decrypts an encrypted message using AES-GCM encryption with a shared secret key.
 *
 * @param sharedSecret - The shared secret key in hexadecimal format
 * @param message - The encrypted message in base64 format
 * @param iv - The initialization vector in hexadecimal format
 * @param additionalData - Additional data to include in the decryption
 * @returns A Promise that resolves to the decrypted message as a string
 */
export declare const decryptMessage: (sharedSecret: string, message: string, iv: string, additionalData?: BufferSource) => Promise<string>;
