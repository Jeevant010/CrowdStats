import { Chain } from '@dynamic-labs/wallet-connector-core';
import { WalletOption } from '../../../shared';
/**
 * Sorts the provided wallets by the provided sortedWalletKeys
 * Wallets that they keys were not provided will be kept in their default order
 *
 * This function should be used when you want to have the full wallet offerings,
 * but control the order of the top wallets.
 */
export declare const SortWallets: (sortedWalletKeys: string[]) => (wallets: WalletOption[]) => WalletOption[];
export declare const FilterWallets: (walletKeys: string[]) => (wallets: WalletOption[]) => WalletOption[];
export declare const RemoveWallets: (walletKeys: string[]) => (wallets: WalletOption[]) => WalletOption[];
export declare const FilterBridgeChainsName: (chainName: Chain) => (wallets: WalletOption[]) => WalletOption[];
/**
 * Filters and sorts the wallet selection by the provided sortedWalletKeys.
 * This filter should be used when you only want specific wallets to be available
 * in a certain order.
 */
export declare const FilterAndSortWallets: (sortedWalletKeys: string[]) => (wallets: WalletOption[]) => WalletOption[];
export declare const UniswapFilter: () => (wallets: WalletOption[]) => WalletOption[];
/**
 * Filters the wallets by the provided chain
 * @param chain The chain to filter by
 */
export declare const FilterChain: (chain: Chain) => (wallets: WalletOption[]) => WalletOption[];
