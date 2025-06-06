import { UserProfile } from '@dynamic-labs/types';
type RefreshUserCallback = () => Promise<UserProfile | undefined>;
/**
 * Refresh user state
 * @returns A callback function that can be used to refresh the user state
 */
export declare const useRefreshUser: () => RefreshUserCallback;
export {};
