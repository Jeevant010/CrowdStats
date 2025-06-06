import { Chain, PublicClient, TransactionRequest, Transport } from 'viem';
/**
 * Estimates the L1 fee for the transaction.
 * Currently only supports opStack.
 */
export declare const estimateL1Fee: (publicClient: PublicClient<Transport, Chain>, transaction: Omit<TransactionRequest, 'from'>) => Promise<bigint>;
/**
 * Checks if the chain supports L1 fee estimation.
 */
export declare const isL1FeeSupportedByChain: (chainId: number) => boolean;
