import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
/**
 * Determines whether the programmable network switch feature is supported.
 *
 * @param {WalletConnector} walletConnector - The wallet connector instance.
 * @returns {boolean} Whether the programmable network switch feature is supported.
 */
export declare const isProgrammableNetworkSwitchSupported: (walletConnector: WalletConnector) => boolean;
