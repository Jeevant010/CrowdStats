import { TokenBalance } from '@dynamic-labs/sdk-api-core';
import { IUITransaction } from '@dynamic-labs/types';
export declare const getGasFiatValue: (currentToken: TokenBalance | undefined, transaction: IUITransaction, nativePrice?: number) => string | undefined;
export declare const getTotalFiatCost: (currentToken: TokenBalance | undefined, transaction: IUITransaction, nativePrice?: number, transactionValue?: string) => string | undefined;
