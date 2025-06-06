'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var estimateL1Fee$1 = require('./opStack/estimateL1Fee.cjs');

/**
 * Estimates the L1 fee for the transaction.
 * Currently only supports opStack.
 */
const estimateL1Fee = (publicClient, transaction) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const { chain } = publicClient;
    if (!chain) {
        throw new Error('Chain is not defined');
    }
    const publicClientWithChain = publicClient;
    if (estimateL1Fee$1.opStackSupportedChains.includes(chain.id)) {
        return estimateL1Fee$1.estimateL1Fee(publicClientWithChain, transaction);
    }
    throw new Error('Chain is not supported');
});
const estimateL1FeeSupportedChains = [...estimateL1Fee$1.opStackSupportedChains];
/**
 * Checks if the chain supports L1 fee estimation.
 */
const isL1FeeSupportedByChain = (chainId) => estimateL1FeeSupportedChains.includes(chainId);

exports.estimateL1Fee = estimateL1Fee;
exports.isL1FeeSupportedByChain = isL1FeeSupportedByChain;
