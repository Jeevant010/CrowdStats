import { GetAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletAdditionalAddress } from '@dynamic-labs/sdk-api-core';
import { WalletProvider } from '../../../shared';
export type GetVerifyArgsProps = {
    displaySiweStatement: boolean;
    environmentId: string;
    getAddressOpts?: GetAddressOpts;
    publicWalletAddress: string;
    siweStatement: string;
    skipEmptyAccountCheck?: boolean;
    walletConnector: WalletConnector;
    walletProvider: WalletProvider;
    signedMessageOverride?: string;
    messageToSignOverride?: string;
};
type VerifyArgs = {
    additionalWalletAddresses: WalletAdditionalAddress[] | undefined;
    chain: string;
    messageToSign: string;
    network: string;
    publicWalletAddress: string;
    sessionPublicKey?: string;
    signedMessage: string;
    skipEmptyAccountCheck?: boolean;
    walletName: string;
    walletProvider: WalletProvider;
};
export declare const getVerifyArgs: ({ walletConnector, walletProvider, environmentId, displaySiweStatement, skipEmptyAccountCheck, siweStatement, publicWalletAddress, signedMessageOverride, messageToSignOverride, }: GetVerifyArgsProps) => Promise<VerifyArgs>;
export {};
