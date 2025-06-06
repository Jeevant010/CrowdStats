'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function EmailVerificationVerifyRequestFromJSON(json) {
    return EmailVerificationVerifyRequestFromJSONTyped(json);
}
function EmailVerificationVerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'verificationToken': json['verificationToken'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function EmailVerificationVerifyRequestToJSON(value) {
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

exports.EmailVerificationVerifyRequestFromJSON = EmailVerificationVerifyRequestFromJSON;
exports.EmailVerificationVerifyRequestFromJSONTyped = EmailVerificationVerifyRequestFromJSONTyped;
exports.EmailVerificationVerifyRequestToJSON = EmailVerificationVerifyRequestToJSON;
