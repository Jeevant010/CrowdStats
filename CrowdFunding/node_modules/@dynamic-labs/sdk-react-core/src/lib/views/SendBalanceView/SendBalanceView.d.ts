import { FC, MouseEventHandler } from 'react';
import { TokenBalance } from '@dynamic-labs/sdk-api-core';
import { IUITransaction } from '@dynamic-labs/types';
export declare const usingNative: (token: TokenBalance) => boolean;
export declare const getTransactionValue: (transaction: IUITransaction, isNativeToken: boolean) => string;
export type SendBalanceViewProps = {
    displayPoweredByDynamicFooter?: boolean;
    initialRecipientAddress?: string;
    initialValue?: bigint;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onDone?: () => void;
    onError?: (error: unknown) => void;
    onSuccess?: (receipt: string) => void;
};
export declare const SendBalanceView: FC<SendBalanceViewProps>;
