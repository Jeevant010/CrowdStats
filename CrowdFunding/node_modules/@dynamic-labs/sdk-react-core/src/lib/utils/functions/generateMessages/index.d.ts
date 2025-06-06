import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export declare const generateMessages: (publicWalletAddress: string | undefined, walletConnector: WalletConnector, nonce: string, projectEnvironmentId: string, displaySiweStatement: boolean, siweStatement: string) => Promise<{
    messageToSign: string;
    signedMessage: string;
}>;
