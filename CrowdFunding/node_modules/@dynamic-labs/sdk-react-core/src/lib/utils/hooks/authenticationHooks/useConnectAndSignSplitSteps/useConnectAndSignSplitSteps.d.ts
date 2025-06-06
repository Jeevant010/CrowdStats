import { GetAddressOpts, InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
export type OnlyConnectUserProps = {
    getAddressOpts?: GetAddressOpts;
    walletConnector: InternalWalletConnector;
    shouldShowPendingConnectView?: boolean;
};
export declare const useConnectAndSignSplitSteps: () => {
    onlyConnectUser: ({ walletConnector, getAddressOpts, shouldShowPendingConnectView, }: OnlyConnectUserProps) => Promise<void>;
    signAlreadyConnectedUser: ({ walletConnector, getAddressOpts, }: OnlyConnectUserProps) => Promise<void>;
};
