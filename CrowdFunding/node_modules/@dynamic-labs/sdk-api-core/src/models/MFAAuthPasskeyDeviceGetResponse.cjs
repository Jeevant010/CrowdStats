'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MFAAuthPasskeyDeviceGetResponseAssertion = require('./MFAAuthPasskeyDeviceGetResponseAssertion.cjs');
var MFADeviceType = require('./MFADeviceType.cjs');

/* tslint:disable */
function MFAAuthPasskeyDeviceGetResponseFromJSON(json) {
    return MFAAuthPasskeyDeviceGetResponseFromJSONTyped(json);
}
function MFAAuthPasskeyDeviceGetResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': MFADeviceType.MFADeviceTypeFromJSON(json['type']),
        'assertion': MFAAuthPasskeyDeviceGetResponseAssertion.MFAAuthPasskeyDeviceGetResponseAssertionFromJSON(json['assertion']),
    };
}
function MFAAuthPasskeyDeviceGetResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': MFADeviceType.MFADeviceTypeToJSON(value.type),
        'assertion': MFAAuthPasskeyDeviceGetResponseAssertion.MFAAuthPasskeyDeviceGetResponseAssertionToJSON(value.assertion),
    };
}

exports.MFAAuthPasskeyDeviceGetResponseFromJSON = MFAAuthPasskeyDeviceGetResponseFromJSON;
exports.MFAAuthPasskeyDeviceGetResponseFromJSONTyped = MFAAuthPasskeyDeviceGetResponseFromJSONTyped;
exports.MFAAuthPasskeyDeviceGetResponseToJSON = MFAAuthPasskeyDeviceGetResponseToJSON;
