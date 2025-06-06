'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
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

exports.EmailVerificationRetryRequestFromJSON = EmailVerificationRetryRequestFromJSON;
exports.EmailVerificationRetryRequestFromJSONTyped = EmailVerificationRetryRequestFromJSONTyped;
exports.EmailVerificationRetryRequestToJSON = EmailVerificationRetryRequestToJSON;
