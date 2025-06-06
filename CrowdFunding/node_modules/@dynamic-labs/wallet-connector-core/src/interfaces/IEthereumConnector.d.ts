import { IEVMTransaction } from '@dynamic-labs/types';
export type IPublicClient = {
    estimateGas: (transaction: IEVMTransaction) => Promise<bigint>;
    getBlock: () => Promise<{
        baseFeePerGas?: bigint;
    }>;
    getL1GasPrice?: () => Promise<{
        l1BaseFee: bigint;
    }>;
    getL1FeeData?: () => Promise<{
        l1GasUsed: bigint;
        l1FeeScalar: number;
    }>;
    getBytecode: (args: {
        address: `0x${string}`;
    }) => Promise<`0x${string}` | undefined>;
    readContract: <T = bigint>(args: {
        abi: readonly unknown[];
        address: `0x${string}`;
        args: unknown[];
        functionName: string;
    }) => Promise<T>;
    getGasPrice: () => Promise<bigint>;
};
export type IEthereumConnector = {
    getPublicClient: () => Promise<IPublicClient>;
};
