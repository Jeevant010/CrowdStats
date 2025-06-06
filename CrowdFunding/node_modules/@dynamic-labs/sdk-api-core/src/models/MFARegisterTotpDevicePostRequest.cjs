'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MFADeviceType = require('./MFADeviceType.cjs');

/* tslint:disable */
function MFARegisterTotpDevicePostRequestFromJSON(json) {
    return MFARegisterTotpDevicePostRequestFromJSONTyped(json);
}
function MFARegisterTotpDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': MFADeviceType.MFADeviceTypeFromJSON(json['type']),
        'code': json['code'],
    };
}
function MFARegisterTotpDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': MFADeviceType.MFADeviceTypeToJSON(value.type),
        'code': value.code,
    };
}

exports.MFARegisterTotpDevicePostRequestFromJSON = MFARegisterTotpDevicePostRequestFromJSON;
exports.MFARegisterTotpDevicePostRequestFromJSONTyped = MFARegisterTotpDevicePostRequestFromJSONTyped;
exports.MFARegisterTotpDevicePostRequestToJSON = MFARegisterTotpDevicePostRequestToJSON;
