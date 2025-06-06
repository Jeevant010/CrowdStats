import { exists } from '../runtime.js';

/* tslint:disable */
function JwksKeyFromJSON(json) {
    return JwksKeyFromJSONTyped(json);
}
function JwksKeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kid': !exists(json, 'kid') ? undefined : json['kid'],
        'alg': !exists(json, 'alg') ? undefined : json['alg'],
        'kty': !exists(json, 'kty') ? undefined : json['kty'],
        'use': !exists(json, 'use') ? undefined : json['use'],
        'e': !exists(json, 'e') ? undefined : json['e'],
        'n': !exists(json, 'n') ? undefined : json['n'],
    };
}
function JwksKeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'kid': value.kid,
        'alg': value.alg,
        'kty': value.kty,
        'use': value.use,
        'e': value.e,
        'n': value.n,
    };
}

export { JwksKeyFromJSON, JwksKeyFromJSONTyped, JwksKeyToJSON };
