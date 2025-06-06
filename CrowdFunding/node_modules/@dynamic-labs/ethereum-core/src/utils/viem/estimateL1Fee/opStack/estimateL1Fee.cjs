'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var viem = require('viem');
var viemChains = require('viem/chains');
var abi = require('./abi.cjs');

const estimateL1Fee = (publicClient, transaction) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const serializedTransaction = viem.serializeTransaction(Object.assign(Object.assign({ chainId: publicClient.chain.id }, transaction), { type: transaction.type ? transaction.type : 'eip1559' }));
    return publicClient.readContract({
        abi: abi.gasPriceOracleAbi,
        address: abi.gasPriceOracleAbiAddress,
        args: [serializedTransaction],
        functionName: 'getL1Fee',
    });
});
const opStackSupportedChains = [
    viemChains.optimism.id,
    viemChains.optimismGoerli.id,
    viemChains.optimismSepolia.id,
    viemChains.base.id,
    viemChains.baseGoerli.id,
    viemChains.baseSepolia.id,
];

exports.estimateL1Fee = estimateL1Fee;
exports.opStackSupportedChains = opStackSupportedChains;
