import { Chain, PublicClient, Transport } from 'viem';
import { IUITransaction } from '@dynamic-labs/types';
type Eip1559FeeFeedProps = {
    initialMaxFeePerGas?: bigint;
    initialGasLimit?: bigint;
    publicClient: PublicClient<Transport, Chain>;
};
export declare abstract class Eip1559FeeFeed {
    fee: IUITransaction['fee'];
    private initialMaxFeePerGas;
    private initialGasLimit;
    protected publicClient: PublicClient<Transport, Chain>;
    constructor({ publicClient, initialGasLimit, initialMaxFeePerGas, }: Eip1559FeeFeedProps);
    abstract estimateGas(): Promise<bigint>;
    abstract estimateL1Fee(): Promise<bigint>;
    abstract set maxFeePerGas(value: bigint);
    abstract set maxPriorityFeePerGas(value: bigint);
    fetchFee(): Promise<undefined>;
}
export {};
