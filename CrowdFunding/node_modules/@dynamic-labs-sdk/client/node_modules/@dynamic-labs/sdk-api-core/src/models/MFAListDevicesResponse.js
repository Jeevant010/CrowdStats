import { MFADeviceFromJSON, MFADeviceToJSON } from './MFADevice.js';

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
        'devices': (json['devices'].map(MFADeviceFromJSON)),
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
        'devices': (value.devices.map(MFADeviceToJSON)),
    };
}

export { MFAListDevicesResponseFromJSON, MFAListDevicesResponseFromJSONTyped, MFAListDevicesResponseToJSON };
