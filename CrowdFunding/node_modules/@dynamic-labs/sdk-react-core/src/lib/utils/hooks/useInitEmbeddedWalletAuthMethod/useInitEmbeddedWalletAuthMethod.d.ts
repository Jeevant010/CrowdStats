import { AuthenticatorType } from '@dynamic-labs/wallet-connector-core';
import { EmbeddedWalletCurrentAction } from '../../../shared';
type InitAuthenticatorMethodProps = {
    authenticatorType: AuthenticatorType;
    iframeContainer: HTMLElement;
    currentAction?: EmbeddedWalletCurrentAction;
};
export declare const useInitEmbeddedWalletAuthMethod: () => {
    error: unknown;
    initAuthMethod: ({ authenticatorType, iframeContainer, currentAction, }: InitAuthenticatorMethodProps) => Promise<void>;
    isLoading: boolean;
};
export {};
