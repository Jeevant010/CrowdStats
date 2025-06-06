'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { serializeTransaction } from 'viem';
import { optimism, optimismGoerli, optimismSepolia, base, baseGoerli, baseSepolia } from 'viem/chains';
import { gasPriceOracleAbi, gasPriceOracleAbiAddress } from './abi.js';

const estimateL1Fee = (publicClient, transaction) => __awaiter(void 0, void 0, void 0, function* () {
    const serializedTransaction = serializeTransaction(Object.assign(Object.assign({ chainId: publicClient.chain.id }, transaction), { type: transaction.type ? transaction.type : 'eip1559' }));
    return publicClient.readContract({
        abi: gasPriceOracleAbi,
        address: gasPriceOracleAbiAddress,
        args: [serializedTransaction],
        functionName: 'getL1Fee',
    });
});
const opStackSupportedChains = [
    optimism.id,
    optimismGoerli.id,
    optimismSepolia.id,
    base.id,
    baseGoerli.id,
    baseSepolia.id,
];

export { estimateL1Fee, opStackSupportedChains };
