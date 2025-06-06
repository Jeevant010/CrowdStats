import { exists } from '../runtime.js';

/* tslint:disable */
function AuthenticationExtensionsClientOutputsFromJSON(json) {
    return AuthenticationExtensionsClientOutputsFromJSONTyped(json);
}
function AuthenticationExtensionsClientOutputsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appid': !exists(json, 'appid') ? undefined : json['appid'],
        'credProps': !exists(json, 'credProps') ? undefined : json['credProps'],
        'hmacCreateSecret': !exists(json, 'hmacCreateSecret') ? undefined : json['hmacCreateSecret'],
    };
}
function AuthenticationExtensionsClientOutputsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appid': value.appid,
        'credProps': value.credProps,
        'hmacCreateSecret': value.hmacCreateSecret,
    };
}

export { AuthenticationExtensionsClientOutputsFromJSON, AuthenticationExtensionsClientOutputsFromJSONTyped, AuthenticationExtensionsClientOutputsToJSON };
