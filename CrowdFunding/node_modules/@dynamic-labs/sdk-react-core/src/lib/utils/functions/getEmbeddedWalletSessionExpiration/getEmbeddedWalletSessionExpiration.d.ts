import { Duration } from '@dynamic-labs/sdk-api-core';
/**
 * Convert the session expiration to seconds
 * @param {Duration} duration
 * @returns {number}
 */
export declare const getEmbeddedWalletSessionExpiration: (duration: Duration | undefined) => number;
