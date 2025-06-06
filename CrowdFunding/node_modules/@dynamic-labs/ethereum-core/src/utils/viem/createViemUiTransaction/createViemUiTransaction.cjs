'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var abi = require('../erc20/abi.cjs');
var ViemUiTransaction = require('../ViemUiTransaction/ViemUiTransaction.cjs');

const createViemUiTransaction = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ from, publicClient, walletClient, }) {
    return new ViemUiTransaction.ViemUiTransaction({
        account: from,
        onSubmit: (transaction) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            // Non native token
            if (transaction.nonNativeAddress) {
                return walletClient.writeContract({
                    abi: abi.erc20Abi,
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

exports.createViemUiTransaction = createViemUiTransaction;
