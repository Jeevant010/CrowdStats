import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
export type AccountExistsContextData = {
    email: string;
    embeddedSocialSigninProvider: ProviderEnum;
    embeddedWalletName: string;
    loginProvider: ProviderEnum;
};
export type AccountExistsContextType = {
    existentAccountData: AccountExistsContextData | undefined;
    setExistentAccountData: Dispatch<SetStateAction<AccountExistsContextData | undefined>>;
};
export declare const AccountExistsContext: import("react").Context<AccountExistsContextType | undefined>;
export declare const AccountExistsContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useAccountExistsContext: () => AccountExistsContextType;
