'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
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

exports.SmsVerificationCreateRequestFromJSON = SmsVerificationCreateRequestFromJSON;
exports.SmsVerificationCreateRequestFromJSONTyped = SmsVerificationCreateRequestFromJSONTyped;
exports.SmsVerificationCreateRequestToJSON = SmsVerificationCreateRequestToJSON;
