import { DynamicError } from './DynamicError';
type AccountExistsPayload = {
    email: string;
    embeddedSocialSigninProvider: string;
    embeddedWalletName: string;
    loginProvider: string;
    phoneNumber?: string;
};
export declare class AccountExistsError extends DynamicError {
    errorMessage: string;
    errorPayload: AccountExistsPayload;
    constructor(errorMessage: string, errorPayload: AccountExistsPayload);
}
export {};
