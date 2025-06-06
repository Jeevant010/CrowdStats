import { exists } from '../runtime.js';

/* tslint:disable */
function PublicKeyCredentialRpEntityFromJSON(json) {
    return PublicKeyCredentialRpEntityFromJSONTyped(json);
}
function PublicKeyCredentialRpEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
    };
}
function PublicKeyCredentialRpEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
    };
}

export { PublicKeyCredentialRpEntityFromJSON, PublicKeyCredentialRpEntityFromJSONTyped, PublicKeyCredentialRpEntityToJSON };
