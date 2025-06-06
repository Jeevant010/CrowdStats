import { MFAAuthPasskeyDeviceGetResponseAssertionFromJSON, MFAAuthPasskeyDeviceGetResponseAssertionToJSON } from './MFAAuthPasskeyDeviceGetResponseAssertion.js';
import { MFADeviceTypeFromJSON, MFADeviceTypeToJSON } from './MFADeviceType.js';

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
        'type': MFADeviceTypeFromJSON(json['type']),
        'assertion': MFAAuthPasskeyDeviceGetResponseAssertionFromJSON(json['assertion']),
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
        'type': MFADeviceTypeToJSON(value.type),
        'assertion': MFAAuthPasskeyDeviceGetResponseAssertionToJSON(value.assertion),
    };
}

export { MFAAuthPasskeyDeviceGetResponseFromJSON, MFAAuthPasskeyDeviceGetResponseFromJSONTyped, MFAAuthPasskeyDeviceGetResponseToJSON };
