import { Chain } from 'viem';
import * as chains from 'viem/chains';
import { EvmNetwork } from '@dynamic-labs/types';
/**
 * Gets the chain object for the given chain id.
 * @param chainId - Chain id of the target EVM chain.
 * @returns Viem's chain object.
 */
export declare const getChain: (chainId: number) => chains.Chain;
export declare const mapChain: (network: EvmNetwork) => Chain;
export declare const getOrMapViemChain: (network: EvmNetwork) => Chain;
