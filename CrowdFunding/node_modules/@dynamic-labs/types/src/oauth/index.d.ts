import { ProviderEnum, SocialSignInProviderEnum } from '@dynamic-labs/sdk-api-core';
export type SocialProviderFilter = (providers: SocialSignInProviderEnum[]) => SocialSignInProviderEnum[];
export type SocialAccountInformation = {
    accountId?: string;
    avatar?: string;
    displayName?: string;
    email?: string;
    id: string;
    provider?: ProviderEnum;
    publicIdentifier?: string;
    username?: string;
};
export declare enum SocialOAuthErrorCode {
    ACCOUNT_ALREADY_LINKED = "account_already_linked",
    ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE = "account_already_linked_to_different_profile",
    INVALID_PROVIDER = "invalid_provider",
    NO_ACCOUNT_LINKED = "no_account_linked",
    NO_AUTH_CODE = "no_auth_code",
    NO_OAUTH_URL = "no_oauth_url",
    NO_PROVIDER = "no_provider",
    OAUTH_ERROR = "oauth_error",
    OAUTH_WINDOW_BLOCKED = "oauth_window_blocked",
    OAUTH_WINDOW_CLOSED = "oauth_window_closed",
    OAUTH_WINDOW_TIMEOUT = "oauth_window_timeout",
    PROVIDER_NOT_ENABLED = "provider_not_enabled",
    SESSION_TIMEOUT = "session_timeout",
    SIGNIN_ERROR = "signin_error",
    SOCIAL_LINKING_NOT_ENABLED = "social_linking_not_enabled",
    UNLINK_ERROR = "unlink_error",
    VERIFICATION_ERROR = "verification_error",
    GENERAL_ERROR = "general_error",
    USER_CANCELLED = "user_cancelled"
}
export type SocialOAuthError = {
    code: SocialOAuthErrorCode;
    message: string;
};
