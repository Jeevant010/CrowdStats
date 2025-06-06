'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function EmailVerificationCreateRequestFromJSON(json) {
    return EmailVerificationCreateRequestFromJSONTyped(json);
}
function EmailVerificationCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
    };
}
function EmailVerificationCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'captchaToken': value.captchaToken,
    };
}

exports.EmailVerificationCreateRequestFromJSON = EmailVerificationCreateRequestFromJSON;
exports.EmailVerificationCreateRequestFromJSONTyped = EmailVerificationCreateRequestFromJSONTyped;
exports.EmailVerificationCreateRequestToJSON = EmailVerificationCreateRequestToJSON;
