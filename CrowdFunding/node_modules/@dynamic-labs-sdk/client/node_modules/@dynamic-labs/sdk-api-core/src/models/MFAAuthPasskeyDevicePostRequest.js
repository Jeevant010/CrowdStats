import { PasskeyAuthRequestFromJSON, PasskeyAuthRequestToJSON } from './PasskeyAuthRequest.js';

/* tslint:disable */
function MFAAuthPasskeyDevicePostRequestFromJSON(json) {
    return MFAAuthPasskeyDevicePostRequestFromJSONTyped(json);
}
function MFAAuthPasskeyDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'assertion': PasskeyAuthRequestFromJSON(json['assertion']),
    };
}
function MFAAuthPasskeyDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'assertion': PasskeyAuthRequestToJSON(value.assertion),
    };
}

export { MFAAuthPasskeyDevicePostRequestFromJSON, MFAAuthPasskeyDevicePostRequestFromJSONTyped, MFAAuthPasskeyDevicePostRequestToJSON };
