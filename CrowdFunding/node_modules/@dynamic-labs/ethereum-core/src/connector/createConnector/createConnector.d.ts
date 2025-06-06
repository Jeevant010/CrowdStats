import { WalletClient, Transport, Chain, Account, PublicClient } from 'viem';
import { WalletConnectorsMethod, WalletMetadata } from '@dynamic-labs/wallet-connector-core';
type CustomConnectorDelegate = {
    metadata: WalletMetadata;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    getAddress: () => Promise<string>;
    getConnectedAccounts: () => Promise<string[]>;
    getNetwork: () => Promise<number | undefined>;
    getPublicClient: () => Promise<void | PublicClient<Transport, Chain> | undefined>;
    getWalletClient: (chainId?: string) => WalletClient<Transport, Chain, Account> | undefined;
    isInstalledOnBrowser: () => boolean;
    signMessage: (messageToSign: string) => Promise<string>;
    filter?: () => boolean;
    init?: () => Promise<void>;
    supportsNetworkSwitching?: () => boolean;
    switchNetwork?: (props: {
        networkName?: string;
        networkChainId?: number;
    }) => Promise<void>;
};
export declare const createConnector: (customConnectorFn: (props: any) => CustomConnectorDelegate) => WalletConnectorsMethod;
export {};
