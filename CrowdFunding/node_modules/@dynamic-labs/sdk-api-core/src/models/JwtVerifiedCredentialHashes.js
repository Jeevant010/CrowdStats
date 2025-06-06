import { exists } from '../runtime.js';

/* tslint:disable */
function JwtVerifiedCredentialHashesFromJSON(json) {
    return JwtVerifiedCredentialHashesFromJSONTyped(json);
}
function JwtVerifiedCredentialHashesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockchain': !exists(json, 'blockchain') ? undefined : json['blockchain'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'oauth': !exists(json, 'oauth') ? undefined : json['oauth'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'externalUser': !exists(json, 'externalUser') ? undefined : json['externalUser'],
    };
}
function JwtVerifiedCredentialHashesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockchain': value.blockchain,
        'email': value.email,
        'oauth': value.oauth,
        'phoneNumber': value.phoneNumber,
        'externalUser': value.externalUser,
    };
}

export { JwtVerifiedCredentialHashesFromJSON, JwtVerifiedCredentialHashesFromJSONTyped, JwtVerifiedCredentialHashesToJSON };
