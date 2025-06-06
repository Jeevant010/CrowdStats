'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SdkUser = require('./SdkUser.cjs');

/* tslint:disable */
function VerifyResponseFromJSON(json) {
    return VerifyResponseFromJSONTyped(json);
}
function VerifyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mfaToken': !runtime.exists(json, 'mfaToken') ? undefined : json['mfaToken'],
        'jwt': !runtime.exists(json, 'jwt') ? undefined : json['jwt'],
        'user': SdkUser.SdkUserFromJSON(json['user']),
        'minifiedJwt': !runtime.exists(json, 'minifiedJwt') ? undefined : json['minifiedJwt'],
        'expiresAt': json['expiresAt'],
    };
}
function VerifyResponseToJSON(value) {
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
    };
}

exports.VerifyResponseFromJSON = VerifyResponseFromJSON;
exports.VerifyResponseFromJSONTyped = VerifyResponseFromJSONTyped;
exports.VerifyResponseToJSON = VerifyResponseToJSON;
