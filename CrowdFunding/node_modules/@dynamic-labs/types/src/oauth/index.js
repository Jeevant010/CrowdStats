'use client'
var SocialOAuthErrorCode;
(function (SocialOAuthErrorCode) {
    SocialOAuthErrorCode["ACCOUNT_ALREADY_LINKED"] = "account_already_linked";
    SocialOAuthErrorCode["ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE"] = "account_already_linked_to_different_profile";
    SocialOAuthErrorCode["INVALID_PROVIDER"] = "invalid_provider";
    SocialOAuthErrorCode["NO_ACCOUNT_LINKED"] = "no_account_linked";
    SocialOAuthErrorCode["NO_AUTH_CODE"] = "no_auth_code";
    SocialOAuthErrorCode["NO_OAUTH_URL"] = "no_oauth_url";
    SocialOAuthErrorCode["NO_PROVIDER"] = "no_provider";
    SocialOAuthErrorCode["OAUTH_ERROR"] = "oauth_error";
    SocialOAuthErrorCode["OAUTH_WINDOW_BLOCKED"] = "oauth_window_blocked";
    SocialOAuthErrorCode["OAUTH_WINDOW_CLOSED"] = "oauth_window_closed";
    SocialOAuthErrorCode["OAUTH_WINDOW_TIMEOUT"] = "oauth_window_timeout";
    SocialOAuthErrorCode["PROVIDER_NOT_ENABLED"] = "provider_not_enabled";
    SocialOAuthErrorCode["SESSION_TIMEOUT"] = "session_timeout";
    SocialOAuthErrorCode["SIGNIN_ERROR"] = "signin_error";
    SocialOAuthErrorCode["SOCIAL_LINKING_NOT_ENABLED"] = "social_linking_not_enabled";
    SocialOAuthErrorCode["UNLINK_ERROR"] = "unlink_error";
    SocialOAuthErrorCode["VERIFICATION_ERROR"] = "verification_error";
    SocialOAuthErrorCode["GENERAL_ERROR"] = "general_error";
    SocialOAuthErrorCode["USER_CANCELLED"] = "user_cancelled";
})(SocialOAuthErrorCode || (SocialOAuthErrorCode = {}));

export { SocialOAuthErrorCode };
