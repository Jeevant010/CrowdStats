import { exists } from '../runtime.js';

/* tslint:disable */
function NonceResponseFromJSON(json) {
    return NonceResponseFromJSONTyped(json);
}
function NonceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonce': !exists(json, 'nonce') ? undefined : json['nonce'],
    };
}
function NonceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nonce': value.nonce,
    };
}

export { NonceResponseFromJSON, NonceResponseFromJSONTyped, NonceResponseToJSON };
