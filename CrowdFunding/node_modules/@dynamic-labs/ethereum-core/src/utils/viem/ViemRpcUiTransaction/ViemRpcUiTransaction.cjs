'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var viem = require('viem');
var utils = require('@dynamic-labs/utils');
var validateAddressFormat = require('../../validateAddressFormat/validateAddressFormat.cjs');
var Eip1559FeeFeed = require('../Eip1559FeeFeed.cjs');
var estimateL1Fee = require('../estimateL1Fee/estimateL1Fee.cjs');
var parseEther = require('../parseEther/parseEther.cjs');
var formatEther = require('../formatEther/formatEther.cjs');
var getTransactionRecipient = require('../getTransactionRecipient.cjs');

class ViemRpcUiTransaction extends Eip1559FeeFeed.Eip1559FeeFeed {
    constructor({ transaction, onSubmit, publicClient, }) {
        super({
            initialGasLimit: transaction.gas
                ? viem.hexToBigInt(transaction.gas)
                : undefined,
            initialMaxFeePerGas: transaction.maxFeePerGas
                ? viem.hexToBigInt(transaction.maxFeePerGas)
                : undefined,
            publicClient,
        });
        this.chain = 'EVM';
        this.validateAddressFormat = validateAddressFormat.validateAddressFormat;
        this.parse = parseEther.parseEther;
        this.format = formatEther.formatEther;
        this.transaction = transaction;
        this.onSubmit = onSubmit;
        this.publicClient = publicClient;
    }
    get to() {
        return this.transaction.to || undefined;
    }
    get from() {
        return this.transaction.from || '';
    }
    get value() {
        const { value } = this.transaction;
        return value ? viem.hexToBigInt(value) : undefined;
    }
    get data() {
        return this.transaction.data;
    }
    submit() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return this.onSubmit(this.transaction).catch((error) => {
                if (error instanceof utils.UserRejectedTransactionError) {
                    throw new viem.TransactionExecutionError(new viem.BaseError(error.message), this.transaction);
                }
                throw error;
            });
        });
    }
    getBalance() {
        return this.publicClient.getBalance({
            address: this.transaction.from,
        });
    }
    getTransactionRecipient() {
        var _a;
        return getTransactionRecipient.getTransactionRecipient(this.transaction.data, (_a = this.transaction.to) !== null && _a !== void 0 ? _a : undefined);
    }
    estimateGas() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.transaction, { from } = _a, transaction = _tslib.__rest(_a, ["from"]);
            const transactionWithFrom = Object.assign(Object.assign({}, transaction), { from });
            const hexResult = (yield this.publicClient.transport.request({
                method: 'eth_estimateGas',
                params: [transactionWithFrom],
            }));
            return viem.hexToBigInt(hexResult);
        });
    }
    estimateL1Fee() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!estimateL1Fee.isL1FeeSupportedByChain(((_a = this.publicClient.chain) === null || _a === void 0 ? void 0 : _a.id) || 0)) {
                return BigInt(0);
            }
            const result = yield estimateL1Fee.estimateL1Fee(this.publicClient, {
                data: this.transaction.data,
                to: this.transaction.to,
                value: this.convertHexToBigInt(this.transaction.value),
            });
            return result;
        });
    }
    set maxFeePerGas(value) {
        this.transaction.maxFeePerGas = viem.toHex(value);
    }
    set maxPriorityFeePerGas(value) {
        this.transaction.maxPriorityFeePerGas = viem.toHex(value);
    }
    convertHexToBigInt(value) {
        return value ? viem.hexToBigInt(value) : undefined;
    }
}

exports.ViemRpcUiTransaction = ViemRpcUiTransaction;
