import { Chain } from '@dynamic-labs/wallet-connector-core';
interface NativeCurrency {
    decimals: number;
    iconUrl?: string;
    name: string;
    symbol: string;
}
export interface NetworkInfoEntry {
    chainId: number;
    nativeCurrency: NativeCurrency;
    iconUrls: string[];
    name: string;
}
export declare const getNetworkInfoEntry: ({ chain, networkId, networkInfo, }: {
    chain: Chain | undefined;
    networkId: string | number | undefined;
    networkInfo: Record<string, NetworkInfoEntry[]>;
}) => NetworkInfoEntry | undefined;
export declare const getEvmChainName: (chainId: number) => string;
export {};
