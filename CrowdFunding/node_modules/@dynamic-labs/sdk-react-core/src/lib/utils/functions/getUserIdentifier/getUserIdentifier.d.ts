import { UserProfile } from '@dynamic-labs/types';
/**
 * This will return a string which we can present to the user as his identifier, such as
 * his email address or phone number.
 */
export declare const getUserIdentifier: (user: UserProfile | undefined) => string;
