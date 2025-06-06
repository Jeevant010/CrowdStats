'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EmailVerificationCreateResponse = require('./EmailVerificationCreateResponse.cjs');
var NextViewEnum = require('./NextViewEnum.cjs');
var SdkUser = require('./SdkUser.cjs');
var SmsVerificationCreateResponse = require('./SmsVerificationCreateResponse.cjs');

/* tslint:disable */
function UpdateSelfResponseFromJSON(json) {
    return UpdateSelfResponseFromJSONTyped(json);
}
function UpdateSelfResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mfaToken': !runtime.exists(json, 'mfaToken') ? undefined : json['mfaToken'],
        'jwt': !runtime.exists(json, 'jwt') ? undefined : json['jwt'],
        'user': SdkUser.SdkUserFromJSON(json['user']),
        'minifiedJwt': !runtime.exists(json, 'minifiedJwt') ? undefined : json['minifiedJwt'],
        'expiresAt': json['expiresAt'],
        'nextView': NextViewEnum.NextViewEnumFromJSON(json['nextView']),
        'emailVerification': !runtime.exists(json, 'emailVerification') ? undefined : EmailVerificationCreateResponse.EmailVerificationCreateResponseFromJSON(json['emailVerification']),
        'smsVerification': !runtime.exists(json, 'smsVerification') ? undefined : SmsVerificationCreateResponse.SmsVerificationCreateResponseFromJSON(json['smsVerification']),
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
        'user': SdkUser.SdkUserToJSON(value.user),
        'minifiedJwt': value.minifiedJwt,
        'expiresAt': value.expiresAt,
        'nextView': NextViewEnum.NextViewEnumToJSON(value.nextView),
        'emailVerification': EmailVerificationCreateResponse.EmailVerificationCreateResponseToJSON(value.emailVerification),
        'smsVerification': SmsVerificationCreateResponse.SmsVerificationCreateResponseToJSON(value.smsVerification),
    };
}

exports.UpdateSelfResponseFromJSON = UpdateSelfResponseFromJSON;
exports.UpdateSelfResponseFromJSONTyped = UpdateSelfResponseFromJSONTyped;
exports.UpdateSelfResponseToJSON = UpdateSelfResponseToJSON;
