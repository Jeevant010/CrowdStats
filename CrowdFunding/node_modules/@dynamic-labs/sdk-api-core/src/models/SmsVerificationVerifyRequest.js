import { exists } from '../runtime.js';

/* tslint:disable */
function SmsVerificationVerifyRequestFromJSON(json) {
    return SmsVerificationVerifyRequestFromJSONTyped(json);
}
function SmsVerificationVerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'verificationToken': json['verificationToken'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function SmsVerificationVerifyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'verificationToken': value.verificationToken,
        'captchaToken': value.captchaToken,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { SmsVerificationVerifyRequestFromJSON, SmsVerificationVerifyRequestFromJSONTyped, SmsVerificationVerifyRequestToJSON };
