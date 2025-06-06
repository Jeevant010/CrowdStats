import { OauthResultResponse, Provider, ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { SocialOAuthErrorCode } from '@dynamic-labs/types';
export type GetOauthCodeProps = {
    provider: ProviderEnum;
    apiProvider: Provider | undefined;
    setIsProcessing: (value: boolean) => void;
    onSettled?: VoidFunction;
    getOAuthResultFromApi: () => Promise<OauthResultResponse | undefined>;
    initWebAuth: (options?: {
        redirectUrl?: string;
    }) => Promise<void>;
    state: string;
    oauthLoginUrl: URL;
    /**
     * The preferred strategy to use for the OAuth2 flow.
     */
    strategy: 'popup' | 'redirect';
    /**
     * Overrides the default redirectUrl coming from the DynamicContextProvider
     */
    redirectUrl?: string;
    isMobile?: boolean;
};
export type IOauth2Service = {
    getOauthCode: (props: GetOauthCodeProps) => Promise<string>;
};
export type GetOauthCodeError = {
    code: SocialOAuthErrorCode;
    message: string;
};
/**
 * Class implementing the fetch service with a configurable fetch implementation.
 */
export declare class Oauth2Service {
    #private;
    static get implementation(): IOauth2Service;
    static set implementation(implementation: IOauth2Service);
    static get getOauthCode(): (props: GetOauthCodeProps) => Promise<string>;
    static isGetOauthCodeError: (error: any) => error is GetOauthCodeError;
}
