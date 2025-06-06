'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PasskeyAuthRequest = require('./PasskeyAuthRequest.cjs');

/* tslint:disable */
function MFAAuthPasskeyDevicePostRequestFromJSON(json) {
    return MFAAuthPasskeyDevicePostRequestFromJSONTyped(json);
}
function MFAAuthPasskeyDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'assertion': PasskeyAuthRequest.PasskeyAuthRequestFromJSON(json['assertion']),
    };
}
function MFAAuthPasskeyDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'assertion': PasskeyAuthRequest.PasskeyAuthRequestToJSON(value.assertion),
    };
}

exports.MFAAuthPasskeyDevicePostRequestFromJSON = MFAAuthPasskeyDevicePostRequestFromJSON;
exports.MFAAuthPasskeyDevicePostRequestFromJSONTyped = MFAAuthPasskeyDevicePostRequestFromJSONTyped;
exports.MFAAuthPasskeyDevicePostRequestToJSON = MFAAuthPasskeyDevicePostRequestToJSON;
