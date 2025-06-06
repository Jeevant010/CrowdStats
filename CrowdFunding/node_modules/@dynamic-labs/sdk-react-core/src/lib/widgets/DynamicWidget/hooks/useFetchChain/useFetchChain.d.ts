import { Chain } from '@dynamic-labs/wallet-connector-core';
import { WalletConnector } from '../../../../..';
export type ChainWithIcon = {
    icon?: string;
    name: string | undefined;
    symbol: Chain | undefined;
    chainId?: string | number;
};
export declare const useFetchChain: (connector: WalletConnector | undefined) => {
    chain: ChainWithIcon | undefined;
    isLoading: boolean;
};
