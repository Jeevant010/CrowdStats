import { Dispatch, SetStateAction } from 'react';
import { SocialSignInProviderEnum } from '@dynamic-labs/sdk-api-core';
type UseRedirectSocialHandlerProps = {
    setSocialProvider: Dispatch<SetStateAction<SocialSignInProviderEnum | undefined>>;
};
export declare const useRedirectSocialHandler: ({ setSocialProvider, }: UseRedirectSocialHandlerProps) => void;
export {};
