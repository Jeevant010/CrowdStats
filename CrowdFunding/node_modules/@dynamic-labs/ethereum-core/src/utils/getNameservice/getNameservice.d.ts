import { PublicClient } from 'viem';
import { NameServiceData } from '@dynamic-labs/sdk-api-core';
export declare const getNameservice: ({ rpcProvider, address, }: {
    rpcProvider: PublicClient;
    address: string;
}) => Promise<NameServiceData>;
