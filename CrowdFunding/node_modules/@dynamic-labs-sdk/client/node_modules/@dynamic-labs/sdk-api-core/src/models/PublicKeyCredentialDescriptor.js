import { PublicKeyCredentialTypeFromJSON, PublicKeyCredentialTypeToJSON } from './PublicKeyCredentialType.js';

/* tslint:disable */
function PublicKeyCredentialDescriptorFromJSON(json) {
    return PublicKeyCredentialDescriptorFromJSONTyped(json);
}
function PublicKeyCredentialDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': PublicKeyCredentialTypeFromJSON(json['type']),
    };
}
function PublicKeyCredentialDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': PublicKeyCredentialTypeToJSON(value.type),
    };
}

export { PublicKeyCredentialDescriptorFromJSON, PublicKeyCredentialDescriptorFromJSONTyped, PublicKeyCredentialDescriptorToJSON };
