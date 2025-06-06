/**
 * All supported error codes.
 *
 * Any changes here should be reflected in the [useErrorText] hook to maintain
 * accurate translations.
 */
export declare enum ErrorCode {
    UNKNOWN = 0,
    DEFAULT = 1,
    USER_REJECTED = 2,
    MESSAGE_SIGNATURE_DENIED = 3,
    WALLET_LOCKED = 4,
    INVALID_PARAMETERS = 5,
    INTERNAL_ERROR = 6,
    ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE = 7,
    CONNECTION_REJECTED = 8,
    MISSING_PUBLIC_ADDRESS = 9,
    CONNECTION_PROPOSAL_EXPIRED = 10,
    SEI_NOT_ENABLED_IN_KEPLR_WALLET = 11
}
