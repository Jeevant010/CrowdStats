import { Chain, PublicClient, RpcTransactionRequest, Transport } from 'viem';
import { IUITransaction } from '@dynamic-labs/types';
import { Eip1559FeeFeed } from '../Eip1559FeeFeed';
type ViemRpcUiTransactionProps = {
    transaction: RpcTransactionRequest;
    onSubmit: (transaction: RpcTransactionRequest) => Promise<string>;
    publicClient: PublicClient<Transport, Chain>;
};
export declare class ViemRpcUiTransaction extends Eip1559FeeFeed implements IUITransaction {
    chain: string;
    receipt: string | undefined;
    private transaction;
    protected publicClient: PublicClient<Transport, Chain>;
    private onSubmit;
    constructor({ transaction, onSubmit, publicClient, }: ViemRpcUiTransactionProps);
    nonNativeValue?: bigint | undefined;
    nonNativeAddress?: string | undefined;
    nonNativeDecimal?: number | undefined;
    nativePrice?: number | undefined;
    parseNonNativeToken?: ((input: string, decimals: number) => bigint) | undefined;
    formatNonNativeToken?: ((value: bigint, decimals: number) => string) | undefined;
    validateAddressFormat: (address: string) => boolean;
    parse: (input: string) => bigint;
    format: (value: bigint, { precision }?: import("@dynamic-labs/types").IUITransactionFormatOptions) => string;
    get to(): `0x${string}` | undefined;
    get from(): `0x${string}` | "";
    get value(): bigint | undefined;
    get data(): `0x${string}` | undefined;
    submit(): Promise<string>;
    getBalance(): Promise<bigint>;
    getTransactionRecipient(): `0x${string}` | undefined;
    estimateGas(): Promise<bigint>;
    estimateL1Fee(): Promise<bigint>;
    set maxFeePerGas(value: bigint);
    set maxPriorityFeePerGas(value: bigint);
    private convertHexToBigInt;
}
export {};
