import { exists } from '../runtime.js';

/* tslint:disable */
function SmsVerificationRetryRequestFromJSON(json) {
    return SmsVerificationRetryRequestFromJSONTyped(json);
}
function SmsVerificationRetryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'phoneCountryCode': json['phoneCountryCode'],
        'phoneNumber': json['phoneNumber'],
        'isoCountryCode': json['isoCountryCode'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
    };
}
function SmsVerificationRetryRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'phoneCountryCode': value.phoneCountryCode,
        'phoneNumber': value.phoneNumber,
        'isoCountryCode': value.isoCountryCode,
        'captchaToken': value.captchaToken,
    };
}

export { SmsVerificationRetryRequestFromJSON, SmsVerificationRetryRequestFromJSONTyped, SmsVerificationRetryRequestToJSON };
