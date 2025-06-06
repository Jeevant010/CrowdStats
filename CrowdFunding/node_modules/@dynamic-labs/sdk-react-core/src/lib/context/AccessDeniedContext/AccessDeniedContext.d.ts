import { ReactNode } from 'react';
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
export type AccessDeniedContextType = {
    deniedAddress: string;
    setDeniedAddress(address: string): void;
    setDeniedOauthUsername(username: string): void;
    setDeniedOauthProvider(deniedOauthProvider: ProviderEnum | undefined): void;
    deniedOauthProvider: ProviderEnum | undefined;
    deniedOauthUsername: string;
};
export declare const AccessDeniedContext: import("react").Context<AccessDeniedContextType | undefined>;
export declare const AccessDeniedContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useAccessDeniedContext: () => AccessDeniedContextType;
