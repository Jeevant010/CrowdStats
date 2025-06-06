import { exists } from '../runtime.js';

/* tslint:disable */
function SmsVerificationCreateRequestFromJSON(json) {
    return SmsVerificationCreateRequestFromJSONTyped(json);
}
function SmsVerificationCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'phoneCountryCode': json['phoneCountryCode'],
        'phoneNumber': json['phoneNumber'],
        'isoCountryCode': json['isoCountryCode'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
    };
}
function SmsVerificationCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'phoneCountryCode': value.phoneCountryCode,
        'phoneNumber': value.phoneNumber,
        'isoCountryCode': value.isoCountryCode,
        'captchaToken': value.captchaToken,
    };
}

export { SmsVerificationCreateRequestFromJSON, SmsVerificationCreateRequestFromJSONTyped, SmsVerificationCreateRequestToJSON };
