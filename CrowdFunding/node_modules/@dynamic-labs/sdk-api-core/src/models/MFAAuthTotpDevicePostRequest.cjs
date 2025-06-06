'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CreateMfaToken = require('./CreateMfaToken.cjs');

/* tslint:disable */
function MFAAuthTotpDevicePostRequestFromJSON(json) {
    return MFAAuthTotpDevicePostRequestFromJSONTyped(json);
}
function MFAAuthTotpDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'createMfaToken': !runtime.exists(json, 'createMfaToken') ? undefined : CreateMfaToken.CreateMfaTokenFromJSON(json['createMfaToken']),
        'code': json['code'],
    };
}
function MFAAuthTotpDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'createMfaToken': CreateMfaToken.CreateMfaTokenToJSON(value.createMfaToken),
        'code': value.code,
    };
}

exports.MFAAuthTotpDevicePostRequestFromJSON = MFAAuthTotpDevicePostRequestFromJSON;
exports.MFAAuthTotpDevicePostRequestFromJSONTyped = MFAAuthTotpDevicePostRequestFromJSONTyped;
exports.MFAAuthTotpDevicePostRequestToJSON = MFAAuthTotpDevicePostRequestToJSON;
