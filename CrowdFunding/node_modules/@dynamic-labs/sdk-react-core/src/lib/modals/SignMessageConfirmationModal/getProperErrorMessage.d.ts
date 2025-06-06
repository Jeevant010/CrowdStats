import { PasskeyError } from '@dynamic-labs/utils';
import { UserProfile } from '@dynamic-labs/types';
export declare const getProperErrorMessage: (originalError: PasskeyError | {
    reason?: string;
}, user?: UserProfile) => string | undefined;
