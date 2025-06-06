import { FC } from 'react';
import { SessionInformation } from '../../../../../utils/types/SessionInformation';
interface SessionListItemProps {
    session: SessionInformation;
    onRevokeAccessClick: (session: SessionInformation) => void;
}
export declare const SessionListItem: FC<SessionListItemProps>;
export {};
