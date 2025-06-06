import React from 'react';
import { IUITransaction } from '@dynamic-labs/types';
import { SimulateTransactionResponse as SimulationResult } from '@dynamic-labs/sdk-api-core';
type TransactionCardProps = {
    transaction: IUITransaction;
    simulationResult: SimulationResult | undefined;
    isGasSponsored: boolean;
    isAATransaction: boolean;
    recipient?: string;
};
export declare const TransactionCard: React.FC<TransactionCardProps>;
export {};
