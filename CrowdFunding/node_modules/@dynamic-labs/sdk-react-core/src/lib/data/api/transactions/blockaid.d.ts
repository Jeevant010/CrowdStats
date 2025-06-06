import { SimulateTransactionResponse, V7UserOp, V6UserOp } from '@dynamic-labs/sdk-api-core';
export declare const isMaliciousUrl: ({ environmentId, url, }: {
    url: string;
    environmentId: string;
}) => Promise<boolean | null | undefined>;
export declare const simulateBlockaidUserOperation: ({ environmentId, userOperation, chainId, value, entryPoint, }: {
    environmentId: string;
    userOperation: V7UserOp | V6UserOp;
    chainId: string;
    value: string;
    entryPoint: {
        version: string;
        address: string;
    };
}) => Promise<SimulateTransactionResponse | undefined>;
export declare const simulateBlockaidEVMTransaction: ({ environmentId, chainId, from, to, value, data, }: {
    environmentId: string;
    chainId: string;
    from: string;
    to: string;
    value: string;
    data: string;
}) => Promise<SimulateTransactionResponse | undefined>;
export declare const simulateBlockaidSVMTransaction: ({ environmentId, chain, accountAddress, transactions, }: {
    environmentId: string;
    chain: string;
    accountAddress: string;
    transactions: string[];
}) => Promise<SimulateTransactionResponse | undefined>;
