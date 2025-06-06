'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MFADevice = require('./MFADevice.cjs');

/* tslint:disable */
function MFAListDevicesResponseFromJSON(json) {
    return MFAListDevicesResponseFromJSONTyped(json);
}
function MFAListDevicesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'devices': (json['devices'].map(MFADevice.MFADeviceFromJSON)),
    };
}
function MFAListDevicesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'devices': (value.devices.map(MFADevice.MFADeviceToJSON)),
    };
}

exports.MFAListDevicesResponseFromJSON = MFAListDevicesResponseFromJSON;
exports.MFAListDevicesResponseFromJSONTyped = MFAListDevicesResponseFromJSONTyped;
exports.MFAListDevicesResponseToJSON = MFAListDevicesResponseToJSON;
