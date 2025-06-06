import { SessionInformation } from '../../types/SessionInformation';
export declare const useSessionKeys: () => {
    listSessions: () => Promise<SessionInformation[]>;
    revokeSession: (sessionId: string) => Promise<void>;
};
