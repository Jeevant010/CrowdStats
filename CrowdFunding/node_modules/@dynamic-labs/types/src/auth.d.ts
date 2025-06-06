import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { PhoneData } from './otp';
export type AuthMode = 'connect-only' | 'connect-and-sign';
export type AuthOptions = {
    email: EmailOptions;
    externalAuth: ExternalAuthOptions;
    sms: SmsOptions;
    social: SocialOptions;
    wallet: WalletOptions;
};
export type AuthMethod = keyof AuthOptions;
type ExternalAuthOptions = {
    externalUserId: string;
};
type EmailOptions = {
    email: string;
    isEmailRecoveryFlow?: boolean;
};
type SmsOptions = {
    phone: PhoneData;
};
type SocialOptions = {
    provider: ProviderEnum;
};
type WalletOptions = {
    address: string;
    connectorName: string;
};
/**
 * Maps auth methods to what property will be displayed under the "option" property of an authentication event.
 *
 * Users will be able to access this data through the AuthOptions[K] type injection as well,
 * but with the "option" property they will also have a standard way to access the auth method target.
 */
type AuthEventPayloadOptionMap = {
    wallet: AuthOptions['wallet']['connectorName'];
    sms: AuthOptions['sms']['phone'];
    email: AuthOptions['email']['email'];
    social: AuthOptions['social']['provider'];
    externalAuth: AuthOptions['externalAuth']['externalUserId'];
};
/** Payload of auth events that provide insight into which auth method was selected */
export type AuthEventPayload = {
    [K in AuthMethod]: {
        type: K;
        option: AuthEventPayloadOptionMap[K];
    } & AuthOptions[K];
}[AuthMethod];
export {};
