import { FC } from 'react';
import { MergeAccountsConfirmationErrorProps } from '@dynamic-labs/utils';
export type MergeUserAccountsViewProps = Pick<MergeAccountsConfirmationErrorProps, 'mergeConflicts' | 'walletAddress'>;
export declare const MergeUserAccountsView: FC<MergeUserAccountsViewProps>;
