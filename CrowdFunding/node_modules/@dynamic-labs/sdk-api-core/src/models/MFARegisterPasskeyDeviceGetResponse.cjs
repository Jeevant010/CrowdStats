'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MFADeviceType = require('./MFADeviceType.cjs');
var MFARegisterPasskeyDeviceGetResponseRegistration = require('./MFARegisterPasskeyDeviceGetResponseRegistration.cjs');

/* tslint:disable */
function MFARegisterPasskeyDeviceGetResponseFromJSON(json) {
    return MFARegisterPasskeyDeviceGetResponseFromJSONTyped(json);
}
function MFARegisterPasskeyDeviceGetResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': MFADeviceType.MFADeviceTypeFromJSON(json['type']),
        'registration': MFARegisterPasskeyDeviceGetResponseRegistration.MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON(json['registration']),
    };
}
function MFARegisterPasskeyDeviceGetResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': MFADeviceType.MFADeviceTypeToJSON(value.type),
        'registration': MFARegisterPasskeyDeviceGetResponseRegistration.MFARegisterPasskeyDeviceGetResponseRegistrationToJSON(value.registration),
    };
}

exports.MFARegisterPasskeyDeviceGetResponseFromJSON = MFARegisterPasskeyDeviceGetResponseFromJSON;
exports.MFARegisterPasskeyDeviceGetResponseFromJSONTyped = MFARegisterPasskeyDeviceGetResponseFromJSONTyped;
exports.MFARegisterPasskeyDeviceGetResponseToJSON = MFARegisterPasskeyDeviceGetResponseToJSON;
