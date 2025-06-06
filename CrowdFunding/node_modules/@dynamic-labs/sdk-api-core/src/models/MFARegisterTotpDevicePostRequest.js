import { MFADeviceTypeFromJSON, MFADeviceTypeToJSON } from './MFADeviceType.js';

/* tslint:disable */
function MFARegisterTotpDevicePostRequestFromJSON(json) {
    return MFARegisterTotpDevicePostRequestFromJSONTyped(json);
}
function MFARegisterTotpDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': MFADeviceTypeFromJSON(json['type']),
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
        'type': MFADeviceTypeToJSON(value.type),
        'code': value.code,
    };
}

export { MFARegisterTotpDevicePostRequestFromJSON, MFARegisterTotpDevicePostRequestFromJSONTyped, MFARegisterTotpDevicePostRequestToJSON };
