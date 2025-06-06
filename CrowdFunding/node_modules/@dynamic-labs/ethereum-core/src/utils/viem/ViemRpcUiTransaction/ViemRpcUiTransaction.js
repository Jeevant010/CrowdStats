'use client'
import { __awaiter, __rest } from '../../../../_virtual/_tslib.js';
import { hexToBigInt, toHex, TransactionExecutionError, BaseError } from 'viem';
import { UserRejectedTransactionError } from '@dynamic-labs/utils';
import { validateAddressFormat } from '../../validateAddressFormat/validateAddressFormat.js';
import { Eip1559FeeFeed } from '../Eip1559FeeFeed.js';
import { isL1FeeSupportedByChain, estimateL1Fee } from '../estimateL1Fee/estimateL1Fee.js';
import { parseEther } from '../parseEther/parseEther.js';
import { formatEther } from '../formatEther/formatEther.js';
import { getTransactionRecipient } from '../getTransactionRecipient.js';

class ViemRpcUiTransaction extends Eip1559FeeFeed {
    constructor({ transaction, onSubmit, publicClient, }) {
        super({
            initialGasLimit: transaction.gas
                ? hexToBigInt(transaction.gas)
                : undefined,
            initialMaxFeePerGas: transaction.maxFeePerGas
                ? hexToBigInt(transaction.maxFeePerGas)
                : undefined,
            publicClient,
        });
        this.chain = 'EVM';
        this.validateAddressFormat = validateAddressFormat;
        this.parse = parseEther;
        this.format = formatEther;
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
        return value ? hexToBigInt(value) : undefined;
    }
    get data() {
        return this.transaction.data;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.onSubmit(this.transaction).catch((error) => {
                if (error instanceof UserRejectedTransactionError) {
                    throw new TransactionExecutionError(new BaseError(error.message), this.transaction);
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
        return getTransactionRecipient(this.transaction.data, (_a = this.transaction.to) !== null && _a !== void 0 ? _a : undefined);
    }
    estimateGas() {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.transaction, { from } = _a, transaction = __rest(_a, ["from"]);
            const transactionWithFrom = Object.assign(Object.assign({}, transaction), { from });
            const hexResult = (yield this.publicClient.transport.request({
                method: 'eth_estimateGas',
                params: [transactionWithFrom],
            }));
            return hexToBigInt(hexResult);
        });
    }
    estimateL1Fee() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!isL1FeeSupportedByChain(((_a = this.publicClient.chain) === null || _a === void 0 ? void 0 : _a.id) || 0)) {
                return BigInt(0);
            }
            const result = yield estimateL1Fee(this.publicClient, {
                data: this.transaction.data,
                to: this.transaction.to,
                value: this.convertHexToBigInt(this.transaction.value),
            });
            return result;
        });
    }
    set maxFeePerGas(value) {
        this.transaction.maxFeePerGas = toHex(value);
    }
    set maxPriorityFeePerGas(value) {
        this.transaction.maxPriorityFeePerGas = toHex(value);
    }
    convertHexToBigInt(value) {
        return value ? hexToBigInt(value) : undefined;
    }
}

export { ViemRpcUiTransaction };
