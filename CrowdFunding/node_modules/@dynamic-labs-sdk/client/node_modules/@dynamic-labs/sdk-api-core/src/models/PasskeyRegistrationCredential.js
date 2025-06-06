import { AuthenticatorTransportProtocolFromJSON, AuthenticatorTransportProtocolToJSON } from './AuthenticatorTransportProtocol.js';

/* tslint:disable */
function PasskeyRegistrationCredentialFromJSON(json) {
    return PasskeyRegistrationCredentialFromJSONTyped(json);
}
function PasskeyRegistrationCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestationObject': json['attestationObject'],
        'clientDataJson': json['clientDataJson'],
        'credentialId': json['credentialId'],
        'transports': (json['transports'].map(AuthenticatorTransportProtocolFromJSON)),
    };
}
function PasskeyRegistrationCredentialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attestationObject': value.attestationObject,
        'clientDataJson': value.clientDataJson,
        'credentialId': value.credentialId,
        'transports': (value.transports.map(AuthenticatorTransportProtocolToJSON)),
    };
}

export { PasskeyRegistrationCredentialFromJSON, PasskeyRegistrationCredentialFromJSONTyped, PasskeyRegistrationCredentialToJSON };
