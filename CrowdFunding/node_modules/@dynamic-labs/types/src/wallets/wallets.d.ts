import { GenericNetwork } from '../networks';
import { IUITransaction } from '../transaction';
export type WalletUiUtils<TWalletConnector> = {
    disabledConfirmationOnce: () => void;
    signTransaction: (walletConnector: TWalletConnector, transaction: IUITransaction) => Promise<any>;
    sendTransaction: (walletConnector: TWalletConnector, transaction: IUITransaction) => Promise<string>;
    signMessage: (props: {
        walletConnector?: TWalletConnector;
        handler: () => Promise<string>;
        message: string | ArrayLike<number>;
    }) => Promise<string>;
    syncWallet: (props: {
        walletConnector: TWalletConnector;
        activeAddress: string;
        expectedAddress: string;
    }) => Promise<void>;
    addNetwork: (props: {
        walletConnector: TWalletConnector;
        network: GenericNetwork;
        handler: () => Promise<void>;
    }) => Promise<void>;
    zkSyncCreateSession: (props: {
        session: unknown;
    }) => Promise<boolean>;
};
export type WalletAddressType = 'payment' | 'ordinals';
