import { MFADeviceTypeFromJSON, MFADeviceTypeToJSON } from './MFADeviceType.js';
import { MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON, MFARegisterPasskeyDeviceGetResponseRegistrationToJSON } from './MFARegisterPasskeyDeviceGetResponseRegistration.js';

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
        'type': MFADeviceTypeFromJSON(json['type']),
        'registration': MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON(json['registration']),
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
        'type': MFADeviceTypeToJSON(value.type),
        'registration': MFARegisterPasskeyDeviceGetResponseRegistrationToJSON(value.registration),
    };
}

export { MFARegisterPasskeyDeviceGetResponseFromJSON, MFARegisterPasskeyDeviceGetResponseFromJSONTyped, MFARegisterPasskeyDeviceGetResponseToJSON };
