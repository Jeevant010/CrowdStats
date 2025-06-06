import { IEmailWalletConnector, InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
type ConnectWithEmailProps = {
    emailWalletConnector: IEmailWalletConnector | undefined;
    handleConnect: (walletConnector: InternalWalletConnector) => Promise<void>;
};
export declare const useConnectWithEmail: ({ emailWalletConnector, handleConnect, }: ConnectWithEmailProps) => {
    connectWithEmail: (email: string) => Promise<void>;
    loading: boolean;
};
export {};
