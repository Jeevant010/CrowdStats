import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    network: number | string | undefined;
    walletConnector: WalletConnector;
};
export declare const isSupportedNetwork: ({ walletConnector, network }: Props) => boolean;
export {};
