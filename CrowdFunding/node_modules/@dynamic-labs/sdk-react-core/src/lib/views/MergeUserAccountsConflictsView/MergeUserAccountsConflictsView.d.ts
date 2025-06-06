import { FC } from 'react';
import { MergeUserConflict } from '@dynamic-labs/sdk-api-core';
export type MergeUserAccountsConflictsViewProps = {
    mergeConflicts: MergeUserConflict[];
};
export declare const MergeUserAccountsConflictsView: FC<MergeUserAccountsConflictsViewProps>;
