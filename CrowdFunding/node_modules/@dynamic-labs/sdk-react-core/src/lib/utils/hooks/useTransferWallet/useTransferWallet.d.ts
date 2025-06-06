import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type TransferWalletProps = {
    publicWalletAddress: string;
    skipEmptyAccountCheck?: boolean;
    overrideSiweStatement: string;
    walletConnector: WalletConnector;
    messageToSignOverride?: string;
    signedMessageOverride?: string;
};
export declare const useTransferWallet: () => (props: TransferWalletProps) => Promise<void>;
export {};
