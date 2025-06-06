import { FC } from 'react';
type ZkSyncApprovalModalProps = {
    session: unknown;
    onCancel: (error: unknown) => void;
    onApproved: () => void;
};
export declare const ZkSyncApprovalModal: FC<ZkSyncApprovalModalProps>;
export {};
