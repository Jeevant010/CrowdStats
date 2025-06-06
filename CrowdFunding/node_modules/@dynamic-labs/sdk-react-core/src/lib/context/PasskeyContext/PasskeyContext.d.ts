import { ReactNode, SetStateAction, Dispatch } from 'react';
import { UserPasskey } from '@dynamic-labs/sdk-api-core';
type PasskeyContextProps = {
    passkey: UserPasskey | undefined;
    setPasskey: Dispatch<SetStateAction<UserPasskey | undefined>>;
    passkeyEdited: boolean;
    setPasskeyEdited: Dispatch<SetStateAction<boolean>>;
    passkeyIcon: JSX.Element | undefined;
    setPasskeyIcon: Dispatch<SetStateAction<JSX.Element | undefined>>;
    userPasskeys: UserPasskey[];
    userPasskeysLoading: boolean;
    userHasPasskeysForCurrentOrigin: boolean;
    userNeedsCrossDomainPasskey: boolean;
    showAlert: () => boolean;
    showSecureAccountBanner: boolean;
    setShowSecureAccountBanner: (value: boolean) => void;
};
export declare const PasskeyContext: import("react").Context<PasskeyContextProps | undefined>;
export declare const PasskeyContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const usePasskeyContext: () => PasskeyContextProps;
export {};
