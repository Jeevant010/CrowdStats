'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MFADeviceType = require('./MFADeviceType.cjs');

/* tslint:disable */
function MFARegisterTotpDeviceGetResponseFromJSON(json) {
    return MFARegisterTotpDeviceGetResponseFromJSONTyped(json);
}
function MFARegisterTotpDeviceGetResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': MFADeviceType.MFADeviceTypeFromJSON(json['type']),
        'secret': json['secret'],
        'uri': json['uri'],
    };
}
function MFARegisterTotpDeviceGetResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': MFADeviceType.MFADeviceTypeToJSON(value.type),
        'secret': value.secret,
        'uri': value.uri,
    };
}

exports.MFARegisterTotpDeviceGetResponseFromJSON = MFARegisterTotpDeviceGetResponseFromJSON;
exports.MFARegisterTotpDeviceGetResponseFromJSONTyped = MFARegisterTotpDeviceGetResponseFromJSONTyped;
exports.MFARegisterTotpDeviceGetResponseToJSON = MFARegisterTotpDeviceGetResponseToJSON;
