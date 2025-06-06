import { MergeUserConflictResolution } from '@dynamic-labs/sdk-api-core';
export declare const useMergeUserAccounts: () => {
    mergeUserAccounts: (mergeConflictResolutions: MergeUserConflictResolution[]) => Promise<void>;
};
