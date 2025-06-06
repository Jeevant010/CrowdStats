import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
export type MultiWalletInternalEvents = {
    triggerComputePrimaryWalletMultiWalletStateFromAccounts: (props: {
        accounts: string[];
    }) => void;
    triggerConnectAndSign: (walletConnector?: InternalWalletConnector) => void;
};
