import { PasskeyRegisterVerifyRequestFromJSON, PasskeyRegisterVerifyRequestToJSON } from './PasskeyRegisterVerifyRequest.js';

/* tslint:disable */
function MFARegisterPasskeyDevicePostRequestFromJSON(json) {
    return MFARegisterPasskeyDevicePostRequestFromJSONTyped(json);
}
function MFARegisterPasskeyDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'attestation': PasskeyRegisterVerifyRequestFromJSON(json['attestation']),
    };
}
function MFARegisterPasskeyDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'attestation': PasskeyRegisterVerifyRequestToJSON(value.attestation),
    };
}

export { MFARegisterPasskeyDevicePostRequestFromJSON, MFARegisterPasskeyDevicePostRequestFromJSONTyped, MFARegisterPasskeyDevicePostRequestToJSON };
