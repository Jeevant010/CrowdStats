import { exists } from '../runtime.js';
import { EmailVerificationCreateResponseFromJSON, EmailVerificationCreateResponseToJSON } from './EmailVerificationCreateResponse.js';
import { NextViewEnumFromJSON, NextViewEnumToJSON } from './NextViewEnum.js';
import { SdkUserFromJSON, SdkUserToJSON } from './SdkUser.js';
import { SmsVerificationCreateResponseFromJSON, SmsVerificationCreateResponseToJSON } from './SmsVerificationCreateResponse.js';

/* tslint:disable */
function UpdateSelfResponseFromJSON(json) {
    return UpdateSelfResponseFromJSONTyped(json);
}
function UpdateSelfResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mfaToken': !exists(json, 'mfaToken') ? undefined : json['mfaToken'],
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'user': SdkUserFromJSON(json['user']),
        'minifiedJwt': !exists(json, 'minifiedJwt') ? undefined : json['minifiedJwt'],
        'expiresAt': json['expiresAt'],
        'nextView': NextViewEnumFromJSON(json['nextView']),
        'emailVerification': !exists(json, 'emailVerification') ? undefined : EmailVerificationCreateResponseFromJSON(json['emailVerification']),
        'smsVerification': !exists(json, 'smsVerification') ? undefined : SmsVerificationCreateResponseFromJSON(json['smsVerification']),
    };
}
function UpdateSelfResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mfaToken': value.mfaToken,
        'jwt': value.jwt,
        'user': SdkUserToJSON(value.user),
        'minifiedJwt': value.minifiedJwt,
        'expiresAt': value.expiresAt,
        'nextView': NextViewEnumToJSON(value.nextView),
        'emailVerification': EmailVerificationCreateResponseToJSON(value.emailVerification),
        'smsVerification': SmsVerificationCreateResponseToJSON(value.smsVerification),
    };
}

export { UpdateSelfResponseFromJSON, UpdateSelfResponseFromJSONTyped, UpdateSelfResponseToJSON };
