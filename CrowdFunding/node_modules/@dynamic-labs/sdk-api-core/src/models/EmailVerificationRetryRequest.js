import { exists } from '../runtime.js';

/* tslint:disable */
function EmailVerificationRetryRequestFromJSON(json) {
    return EmailVerificationRetryRequestFromJSONTyped(json);
}
function EmailVerificationRetryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'email': json['email'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
    };
}
function EmailVerificationRetryRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'email': value.email,
        'captchaToken': value.captchaToken,
    };
}

export { EmailVerificationRetryRequestFromJSON, EmailVerificationRetryRequestFromJSONTyped, EmailVerificationRetryRequestToJSON };
