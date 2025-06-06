'use client'
import { __awaiter } from '../../../../_virtual/_tslib.js';
import { opStackSupportedChains, estimateL1Fee as estimateL1Fee$1 } from './opStack/estimateL1Fee.js';

/**
 * Estimates the L1 fee for the transaction.
 * Currently only supports opStack.
 */
const estimateL1Fee = (publicClient, transaction) => __awaiter(void 0, void 0, void 0, function* () {
    const { chain } = publicClient;
    if (!chain) {
        throw new Error('Chain is not defined');
    }
    const publicClientWithChain = publicClient;
    if (opStackSupportedChains.includes(chain.id)) {
        return estimateL1Fee$1(publicClientWithChain, transaction);
    }
    throw new Error('Chain is not supported');
});
const estimateL1FeeSupportedChains = [...opStackSupportedChains];
/**
 * Checks if the chain supports L1 fee estimation.
 */
const isL1FeeSupportedByChain = (chainId) => estimateL1FeeSupportedChains.includes(chainId);

export { estimateL1Fee, isL1FeeSupportedByChain };
