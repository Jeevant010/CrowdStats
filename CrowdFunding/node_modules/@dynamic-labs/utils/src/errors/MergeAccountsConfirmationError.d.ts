import { MergeConflicts } from '@dynamic-labs/sdk-api-core';
import { DynamicError } from './DynamicError';
export type MergeAccountsConfirmationErrorProps = {
    code: string;
    mergeConflicts?: MergeConflicts;
    walletAddress?: string;
};
export declare class MergeAccountsConfirmationError extends DynamicError {
    mergeConflicts: MergeConflicts | undefined;
    walletAddress: string | undefined;
    constructor({ code, mergeConflicts, walletAddress, }: MergeAccountsConfirmationErrorProps);
}
