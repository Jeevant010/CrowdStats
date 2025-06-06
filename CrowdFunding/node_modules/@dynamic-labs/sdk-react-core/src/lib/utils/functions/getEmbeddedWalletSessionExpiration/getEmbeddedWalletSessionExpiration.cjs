'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const sessionExpirationUnit = {
    days: 86400,
    hours: 3600,
    minutes: 60,
};
/**
 * Convert the session expiration to seconds
 * @param {Duration} duration
 * @returns {number}
 */
const getEmbeddedWalletSessionExpiration = (duration) => {
    if (!duration) {
        return 0;
    }
    const { unit, amount } = duration;
    const sessionExpiration = amount || 0;
    const decodedSessionExpirationUnit = sessionExpirationUnit[unit] || 0;
    return sessionExpiration * decodedSessionExpirationUnit;
};

exports.getEmbeddedWalletSessionExpiration = getEmbeddedWalletSessionExpiration;
