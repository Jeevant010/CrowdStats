'use client'
import { __awaiter } from '../../../../_virtual/_tslib.js';
import { erc20Abi } from '../erc20/abi.js';
import { ViemUiTransaction } from '../ViemUiTransaction/ViemUiTransaction.js';

const createViemUiTransaction = (_a) => __awaiter(void 0, [_a], void 0, function* ({ from, publicClient, walletClient, }) {
    return new ViemUiTransaction({
        account: from,
        onSubmit: (transaction) => __awaiter(void 0, void 0, void 0, function* () {
            // Non native token
            if (transaction.nonNativeAddress) {
                return walletClient.writeContract({
                    abi: erc20Abi,
                    account: from,
                    address: transaction.nonNativeAddress,
                    args: [transaction.to, transaction.nonNativeValue],
                    functionName: 'transfer',
                    maxFeePerGas: transaction.maxFeePerGas,
                    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
                });
            }
            // Native token
            return walletClient.sendTransaction({
                account: from,
                data: '0x',
                maxFeePerGas: transaction.maxFeePerGas,
                maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
                to: transaction.to,
                value: transaction.value,
            });
        }),
        publicClient,
        transaction: {},
    });
});

export { createViemUiTransaction };
