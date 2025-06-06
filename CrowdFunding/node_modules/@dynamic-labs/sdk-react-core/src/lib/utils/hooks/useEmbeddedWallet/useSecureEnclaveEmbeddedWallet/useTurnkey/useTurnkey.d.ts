import { EmbeddedWalletChainEnum } from '@dynamic-labs/sdk-api-core';
import { Wallet, WebAuthnAttestation } from '@dynamic-labs/wallet-connector-core';
export declare const useTurnkey: () => {
    readonly createTurnkeyWallet: (chains?: EmbeddedWalletChainEnum[], options?: {
        webAuthnAttestation: WebAuthnAttestation;
    }) => Promise<Wallet | undefined>;
};
