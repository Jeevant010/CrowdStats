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
export declare const convertPublicKeyCryptoKeyToHex: (publicKey: CryptoKey) => Promise<string>;
