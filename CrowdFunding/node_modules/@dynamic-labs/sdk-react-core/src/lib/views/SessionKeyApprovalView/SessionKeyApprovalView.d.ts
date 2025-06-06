import { FC } from 'react';
import { SessionInformation } from '../../utils/types/SessionInformation';
export interface SessionKeyApprovalViewProps {
    session: SessionInformation;
    onApprove: () => void;
    onReject: () => void;
}
export declare const SessionKeyApprovalView: FC<SessionKeyApprovalViewProps>;
