import { MFADeviceTypeFromJSON, MFADeviceTypeToJSON } from './MFADeviceType.js';

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
        'type': MFADeviceTypeFromJSON(json['type']),
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
        'type': MFADeviceTypeToJSON(value.type),
        'secret': value.secret,
        'uri': value.uri,
    };
}

export { MFARegisterTotpDeviceGetResponseFromJSON, MFARegisterTotpDeviceGetResponseFromJSONTyped, MFARegisterTotpDeviceGetResponseToJSON };
