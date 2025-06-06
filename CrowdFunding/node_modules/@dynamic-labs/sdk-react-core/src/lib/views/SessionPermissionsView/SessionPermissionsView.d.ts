/// <reference types="react" />
import { SessionInformation } from '../../utils/types/SessionInformation';
export interface SessionPermissionsViewProps {
    session: SessionInformation;
    /** Whether to show the advanced section */
    showAdvanced?: boolean;
}
/**
 * A view component to render SessionInformation permissions
 */
export declare const SessionPermissionsView: ({ session, showAdvanced, }: SessionPermissionsViewProps) => JSX.Element;
