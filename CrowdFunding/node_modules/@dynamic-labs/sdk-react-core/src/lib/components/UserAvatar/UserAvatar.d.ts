/// <reference types="react" />
import { UserProfile } from '@dynamic-labs/types';
type UserAvatarProps = {
    user: UserProfile | undefined;
    containerClassName?: string;
    renderWithFallback?: boolean;
};
export declare const UserAvatar: ({ user, containerClassName, renderWithFallback, }: UserAvatarProps) => JSX.Element | null;
export {};
