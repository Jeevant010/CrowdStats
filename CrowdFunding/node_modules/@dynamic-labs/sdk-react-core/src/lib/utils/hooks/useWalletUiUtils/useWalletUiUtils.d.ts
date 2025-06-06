import { ReactNode } from 'react';
import { WalletUiUtils } from '@dynamic-labs/types';
import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletUiUtilsHookProps } from './useWalletUiUtils.types';
export declare const useWalletUiUtils: ({ hideEmbeddedWalletTransactionUIs, }: WalletUiUtilsHookProps) => [
    ReactNode | undefined,
    WalletUiUtils<InternalWalletConnector>
];
