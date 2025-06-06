import { Chain, PublicClient, TransactionRequest, Transport } from 'viem';
export declare const estimateL1Fee: (publicClient: PublicClient<Transport, Chain>, transaction: Omit<TransactionRequest, 'from'>) => Promise<bigint>;
export declare const opStackSupportedChains: number[];
