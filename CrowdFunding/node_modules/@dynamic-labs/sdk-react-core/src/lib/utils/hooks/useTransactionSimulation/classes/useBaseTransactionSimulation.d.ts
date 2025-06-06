import { SimulateTransactionResponse } from '@dynamic-labs/sdk-api-core';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useDynamicContext';
export type TransactionType = 'SignTransaction' | 'SendTransaction' | 'SignAllTransactions';
export type FeeData = {
    nativeAmount?: bigint;
    usdAmount?: string;
    humanReadableAmount?: string;
};
export type SimulationState = {
    isLoading: boolean;
    error?: string;
    result?: SimulateTransactionResponse & {
        feeData?: FeeData;
    };
};
export type BaseTransactionSimulationHook = {
    simulationState: SimulationState;
    setSimulationState: (state: SimulationState) => void;
    nativeTokenDecimals: number;
    handleSimulationError: (e: Error, type?: string) => void;
    primaryWallet: ReturnType<typeof useInternalDynamicContext>['primaryWallet'];
    environmentId: string;
    networkConfigurations: ReturnType<typeof useInternalDynamicContext>['networkConfigurations'];
};
export declare const useBaseTransactionSimulation: (hookName: string) => BaseTransactionSimulationHook;
