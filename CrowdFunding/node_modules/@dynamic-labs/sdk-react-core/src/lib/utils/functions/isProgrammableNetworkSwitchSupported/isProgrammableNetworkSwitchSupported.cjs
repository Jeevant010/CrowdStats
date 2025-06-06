'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Determines whether the programmable network switch feature is supported.
 *
 * @param {WalletConnector} walletConnector - The wallet connector instance.
 * @returns {boolean} Whether the programmable network switch feature is supported.
 */
const isProgrammableNetworkSwitchSupported = (walletConnector) => {
    // TODO: use PlatformService
    const urlParams = new URLSearchParams(window.location.search);
    // Get the dev_isProgrammableNetworkSwitchSupported parameter from the URL.
    const devIsProgrammableNetworkSwitchSupported = urlParams.get('dev_isProgrammableNetworkSwitchSupported');
    if (devIsProgrammableNetworkSwitchSupported) {
        return devIsProgrammableNetworkSwitchSupported === 'true';
    }
    // Otherwise, fall back to the original logic and return whether switchNetworkOnlyFromWallet is not true.
    return walletConnector.switchNetworkOnlyFromWallet !== true;
};

exports.isProgrammableNetworkSwitchSupported = isProgrammableNetworkSwitchSupported;
