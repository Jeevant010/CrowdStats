'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('../../logger.cjs');

const hasAtomicStatusCapability = (capabilities, chainId) => {
    if (!(capabilities === null || capabilities === void 0 ? void 0 : capabilities[chainId])) {
        return false;
    }
    const chainCapabilities = capabilities[chainId];
    const hasAtomicStatus = Boolean(chainCapabilities['atomic'] &&
        (chainCapabilities['atomic'].status === 'ready' ||
            chainCapabilities['atomic'].status === 'supported'));
    // coinbase uses 'atomicBatch.support' instead of 'atomic.status'
    const hasAtomicBatchSupport = Boolean(chainCapabilities['atomicBatch'] &&
        chainCapabilities['atomicBatch'].supported === true);
    logger.logger.debug('[hasAtomicStatusCapability]', {
        chainCapabilities,
        hasAtomicBatchSupport,
        hasAtomicStatus,
    });
    return hasAtomicStatus || hasAtomicBatchSupport;
};

exports.hasAtomicStatusCapability = hasAtomicStatusCapability;
