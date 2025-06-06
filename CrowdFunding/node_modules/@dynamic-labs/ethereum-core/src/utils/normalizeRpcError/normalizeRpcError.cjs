'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var viem = require('viem');

/**
 * Some wallets may not reject some operations following the EIP-1193 standard.
 * This function normalizes the errors to follow the EIP-1193 standard.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeRpcError = (err) => {
    /**
     * When the error already comply with the EIP-1193 standard, we don't need to normalize it
     */
    if (err.code === 4001) {
        throw err;
    }
    let mappedError = null;
    try {
        mappedError = mapRpcError(err);
    }
    catch (e) {
        // ignore errors when mapping
    }
    if (mappedError) {
        throw mappedError;
    }
    /**
     * If no error is mapped, we rethrow the original error
     */
    throw err;
};
const mapRpcError = (err) => {
    /**
     * Checks for user rejection error message
     * Rainbow Extension will return a message like "User rejected the request"
     * BitGet will return a message like "user reject this request"
     * Keplr will return a message that matches "Request rejected"
     */
    if (typeof err.message === 'string' &&
        (err.message.includes('User rejected the request') ||
            err.message.includes('user reject this request') ||
            err.message === 'Request rejected')) {
        return new viem.UserRejectedRequestError(err);
    }
    return null;
};

exports.normalizeRpcError = normalizeRpcError;
