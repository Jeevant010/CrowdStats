import { WalletGroups, WalletOption } from '../../../shared';
export declare const getWalletOptions: () => import("../..").WalletOptionsState, useWalletOptions: () => import("../..").WalletOptionsState;
export declare const getWalletConnectorOptions: () => WalletOption[];
export declare const useWalletConnectorOptions: () => WalletOption[];
export declare const setWalletConnectorOptions: (walletConnectorOptions: WalletOption[]) => void;
export declare const getWalletGroups: () => WalletGroups;
export declare const useWalletGroups: () => WalletGroups;
export declare const setWalletGroups: (groups: WalletGroups) => void;
/**
 * Merges the current wallet groups with the new groups.
 * @param groups - The new wallet groups to merge.
 */
export declare const mergeWalletGroups: (groups: WalletGroups) => void;
/**
 * Merges the current wallet connector options with the new options.
 * @param options - The new wallet connector options to merge.
 */
export declare const mergeWalletConnectorOptions: (options: WalletOption[]) => void;
