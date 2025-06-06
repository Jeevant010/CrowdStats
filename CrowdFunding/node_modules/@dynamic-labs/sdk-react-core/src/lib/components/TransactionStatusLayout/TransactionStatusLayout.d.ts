import { FC, MouseEventHandler, ReactNode } from 'react';
import { TokenBalance } from '@dynamic-labs/sdk-api-core';
import { IUITransaction } from '@dynamic-labs/types';
export type Props = {
    NetworkIcon?: ReactNode;
    transactionValue: string;
    destinationAddress: string;
    displayPoweredByDynamicFooter?: boolean;
    networkCurrency: string;
    networkName: string;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onDone: MouseEventHandler<HTMLButtonElement>;
    transaction: IUITransaction;
    currentToken?: TokenBalance;
    isNativeToken: boolean;
    transactionHash?: string;
};
export declare const TransactionStatusLayout: FC<Props>;
