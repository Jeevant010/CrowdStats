'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PasskeyRegisterVerifyRequest = require('./PasskeyRegisterVerifyRequest.cjs');

/* tslint:disable */
function MFARegisterPasskeyDevicePostRequestFromJSON(json) {
    return MFARegisterPasskeyDevicePostRequestFromJSONTyped(json);
}
function MFARegisterPasskeyDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'attestation': PasskeyRegisterVerifyRequest.PasskeyRegisterVerifyRequestFromJSON(json['attestation']),
    };
}
function MFARegisterPasskeyDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'attestation': PasskeyRegisterVerifyRequest.PasskeyRegisterVerifyRequestToJSON(value.attestation),
    };
}

exports.MFARegisterPasskeyDevicePostRequestFromJSON = MFARegisterPasskeyDevicePostRequestFromJSON;
exports.MFARegisterPasskeyDevicePostRequestFromJSONTyped = MFARegisterPasskeyDevicePostRequestFromJSONTyped;
exports.MFARegisterPasskeyDevicePostRequestToJSON = MFARegisterPasskeyDevicePostRequestToJSON;
