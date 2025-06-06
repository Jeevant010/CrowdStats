import { Wallet } from '@dynamic-labs/wallet-connector-core';
export type FundingEvents = {
    /**
     * Triggered when a wallet is connected for funding
     */
    walletConnectedForFunding: (props: {
        /**
         * Wallet that was connected
         */
        wallet: Wallet;
        /**
         * Whether the wallet was connected via Phantom redirect
         */
        isPhantomRedirect: boolean;
        /**
         * Whether this connection was initiated by the widget UI or headless code
         */
        initiatedByWidget: boolean;
    }) => void;
};
