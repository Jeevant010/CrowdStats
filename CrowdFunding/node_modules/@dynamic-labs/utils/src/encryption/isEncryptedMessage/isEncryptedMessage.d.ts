import { EncryptedMessage } from '../encryptMessage';
/**
 * Type guard to check if a value is an encrypted message
 * @param value - Value to check
 * @returns boolean indicating if the value matches the EncryptedMessage format
 */
export declare const isEncryptedMessage: (value: unknown) => value is EncryptedMessage;
