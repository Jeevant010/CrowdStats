'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CreateMfaToken = require('./CreateMfaToken.cjs');

/* tslint:disable */
function MFAAuthRecoveryDevicePostRequestFromJSON(json) {
    return MFAAuthRecoveryDevicePostRequestFromJSONTyped(json);
}
function MFAAuthRecoveryDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createMfaToken': !runtime.exists(json, 'createMfaToken') ? undefined : CreateMfaToken.CreateMfaTokenFromJSON(json['createMfaToken']),
        'code': json['code'],
    };
}
function MFAAuthRecoveryDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createMfaToken': CreateMfaToken.CreateMfaTokenToJSON(value.createMfaToken),
        'code': value.code,
    };
}

exports.MFAAuthRecoveryDevicePostRequestFromJSON = MFAAuthRecoveryDevicePostRequestFromJSON;
exports.MFAAuthRecoveryDevicePostRequestFromJSONTyped = MFAAuthRecoveryDevicePostRequestFromJSONTyped;
exports.MFAAuthRecoveryDevicePostRequestToJSON = MFAAuthRecoveryDevicePostRequestToJSON;
