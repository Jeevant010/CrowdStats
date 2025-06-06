'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
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

exports.SmsVerificationRetryRequestFromJSON = SmsVerificationRetryRequestFromJSON;
exports.SmsVerificationRetryRequestFromJSONTyped = SmsVerificationRetryRequestFromJSONTyped;
exports.SmsVerificationRetryRequestToJSON = SmsVerificationRetryRequestToJSON;
