import { PublicKeyCredentialTypeFromJSON, PublicKeyCredentialTypeToJSON } from './PublicKeyCredentialType.js';

/* tslint:disable */
function PublicKeyCredentialParametersFromJSON(json) {
    return PublicKeyCredentialParametersFromJSONTyped(json);
}
function PublicKeyCredentialParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alg': json['alg'],
        'type': PublicKeyCredentialTypeFromJSON(json['type']),
    };
}
function PublicKeyCredentialParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alg': value.alg,
        'type': PublicKeyCredentialTypeToJSON(value.type),
    };
}

export { PublicKeyCredentialParametersFromJSON, PublicKeyCredentialParametersFromJSONTyped, PublicKeyCredentialParametersToJSON };
