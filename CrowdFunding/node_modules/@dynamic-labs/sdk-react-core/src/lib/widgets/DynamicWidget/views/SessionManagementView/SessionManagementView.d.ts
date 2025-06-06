import { FC } from 'react';
export interface SessionManagementViewProps {
    bannerMessage?: {
        type: 'success' | 'error';
        message: string;
    };
}
export declare const SessionManagementView: FC<SessionManagementViewProps>;
