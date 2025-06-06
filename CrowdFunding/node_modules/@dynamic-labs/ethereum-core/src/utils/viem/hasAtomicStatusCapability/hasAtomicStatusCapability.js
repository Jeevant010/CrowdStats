'use client'
import { logger } from '../../logger.js';

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
    logger.debug('[hasAtomicStatusCapability]', {
        chainCapabilities,
        hasAtomicBatchSupport,
        hasAtomicStatus,
    });
    return hasAtomicStatus || hasAtomicBatchSupport;
};

export { hasAtomicStatusCapability };
