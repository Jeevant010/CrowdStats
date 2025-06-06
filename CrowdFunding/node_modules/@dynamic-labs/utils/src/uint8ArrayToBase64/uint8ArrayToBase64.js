'use client'
/**
 * Converts a Uint8Array to a base64 encoded string
 * @param buf - The Uint8Array to convert
 * @returns The base64 encoded string representation of the input buffer
 * @example
 * ```ts
 * const originalData = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
 * const base64 = uint8ArrayToBase64(originalData); // "SGVsbG8="
 * const restored = uint8ArrayFromBase64(base64); // Uint8Array [72, 101, 108, 108, 111]
 * ```
 */
const uint8ArrayToBase64 = (buf) => Buffer.from(buf).toString('base64');
/**
 * Converts a base64 encoded string back to a Uint8Array
 * @param base64 - The base64 encoded string to convert
 * @returns The Uint8Array representation of the input base64 string
 * @example
 * ```ts
 * const base64String = "SGVsbG8="; // "Hello" encoded in base64
 * const uint8Array = uint8ArrayFromBase64(base64String); // Uint8Array [72, 101, 108, 108, 111]
 * const backToBase64 = uint8ArrayToBase64(uint8Array); // "SGVsbG8="
 * ```
 */
const uint8ArrayFromBase64 = (base64) => Uint8Array.from(Buffer.from(base64, 'base64'));

export { uint8ArrayFromBase64, uint8ArrayToBase64 };
