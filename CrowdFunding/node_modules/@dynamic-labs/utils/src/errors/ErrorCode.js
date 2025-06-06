'use client'
/**
 * All supported error codes.
 *
 * Any changes here should be reflected in the [useErrorText] hook to maintain
 * accurate translations.
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["UNKNOWN"] = 0] = "UNKNOWN";
    ErrorCode[ErrorCode["DEFAULT"] = 1] = "DEFAULT";
    ErrorCode[ErrorCode["USER_REJECTED"] = 2] = "USER_REJECTED";
    ErrorCode[ErrorCode["MESSAGE_SIGNATURE_DENIED"] = 3] = "MESSAGE_SIGNATURE_DENIED";
    ErrorCode[ErrorCode["WALLET_LOCKED"] = 4] = "WALLET_LOCKED";
    ErrorCode[ErrorCode["INVALID_PARAMETERS"] = 5] = "INVALID_PARAMETERS";
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 6] = "INTERNAL_ERROR";
    ErrorCode[ErrorCode["ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE"] = 7] = "ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE";
    ErrorCode[ErrorCode["CONNECTION_REJECTED"] = 8] = "CONNECTION_REJECTED";
    ErrorCode[ErrorCode["MISSING_PUBLIC_ADDRESS"] = 9] = "MISSING_PUBLIC_ADDRESS";
    ErrorCode[ErrorCode["CONNECTION_PROPOSAL_EXPIRED"] = 10] = "CONNECTION_PROPOSAL_EXPIRED";
    ErrorCode[ErrorCode["SEI_NOT_ENABLED_IN_KEPLR_WALLET"] = 11] = "SEI_NOT_ENABLED_IN_KEPLR_WALLET";
})(ErrorCode || (ErrorCode = {}));

export { ErrorCode };
