import { exists } from '../runtime.js';

/* tslint:disable */
function ExternalAuthSigninRequestFromJSON(json) {
    return ExternalAuthSigninRequestFromJSONTyped(json);
}
function ExternalAuthSigninRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function ExternalAuthSigninRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jwt': value.jwt,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { ExternalAuthSigninRequestFromJSON, ExternalAuthSigninRequestFromJSONTyped, ExternalAuthSigninRequestToJSON };
