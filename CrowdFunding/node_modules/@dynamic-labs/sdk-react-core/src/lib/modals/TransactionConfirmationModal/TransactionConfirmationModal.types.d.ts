import { FC, ReactNode } from 'react';
import { IUITransaction } from '@dynamic-labs/types';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { TokenBalance } from '@dynamic-labs/sdk-api-core';
import { CopyKey } from '../../shared';
export type TransactionConfirmationModalProps = {
    onReject: (error: unknown) => void;
    onTransactionResponseSuccess: (receipt: string) => void;
    title: ReactNode;
    transaction: IUITransaction;
    walletConnector: WalletConnector;
    hideModal: boolean;
    isNativeToken?: boolean;
    currentToken?: TokenBalance;
} & CopyKey;
export type TransactionConfirmationModalComponent = FC<TransactionConfirmationModalProps>;
