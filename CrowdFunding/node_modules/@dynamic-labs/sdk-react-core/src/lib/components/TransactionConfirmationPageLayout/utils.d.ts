import { MouseEventHandler } from 'react';
import { WalletConnector, AuthenticatorType } from '@dynamic-labs/wallet-connector-core';
import { IUITransaction } from '@dynamic-labs/types';
import { TokenBalance } from '@dynamic-labs/sdk-api-core';
import { EmbeddedWalletCurrentAction, Wallet } from '../../shared';
import type { ViewType } from '../../context/ViewContext';
interface AuthFlowOptions {
    ignoreIfIsEmbeddedWidget: boolean;
    performMultiWalletChecks: boolean;
}
interface Config {
    walletConnector: WalletConnector | undefined;
    usingSessionKey: (walletConnector: WalletConnector) => boolean;
    onClickSend: MouseEventHandler<HTMLButtonElement>;
    isTurnkeyWallet: boolean;
    userNeedsCrossDomainPasskey: boolean;
}
interface RecoveryHandlers {
    shouldInitRecovery: () => Promise<boolean>;
    initPasskeyRecoveryProcess: (authenticatorType?: AuthenticatorType, currentAction?: EmbeddedWalletCurrentAction) => Promise<Wallet>;
}
interface ViewHandlers {
    pushView: (view: ViewType) => void;
    setShowAuthFlow: (show: boolean, options: AuthFlowOptions) => void;
}
export declare const useCurrencySymbol: (currentToken: TokenBalance | undefined, currency: string | undefined) => string | undefined;
export declare const getValueRounded: (isNativeToken: boolean, transaction: IUITransaction) => string | number | undefined;
export declare const calculateFiatPrice: (amount?: number, price?: number, decimals?: number) => number | undefined;
export declare const getDisplayFiatPrice: (amountValue?: number, currentToken?: TokenBalance) => string;
export declare const useHandleRecovery: (walletConnector: WalletConnector | undefined, usingSessionKey: (walletConnector: WalletConnector) => boolean, onSuccess: ((transactionResponse: string) => void) | undefined, shouldInitRecovery: () => Promise<boolean>, initPasskeyRecoveryProcess: (authenticatorType?: AuthenticatorType, currentAction?: EmbeddedWalletCurrentAction) => Promise<Wallet>, hideModal?: boolean) => void;
export declare const useHandleSubmitWithChecks: (config: Config, recoveryHandlers: RecoveryHandlers, viewHandlers: ViewHandlers) => (e: any) => Promise<void>;
export {};
