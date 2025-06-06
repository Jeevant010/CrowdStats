import { exists } from '../runtime.js';

/* tslint:disable */
function AuthenticationExtensionsClientInputsFromJSON(json) {
    return AuthenticationExtensionsClientInputsFromJSONTyped(json);
}
function AuthenticationExtensionsClientInputsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appid': !exists(json, 'appid') ? undefined : json['appid'],
        'credProps': !exists(json, 'credProps') ? undefined : json['credProps'],
        'hmacCreateSecret': !exists(json, 'hmacCreateSecret') ? undefined : json['hmacCreateSecret'],
    };
}
function AuthenticationExtensionsClientInputsToJSON(value) {
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

export { AuthenticationExtensionsClientInputsFromJSON, AuthenticationExtensionsClientInputsFromJSONTyped, AuthenticationExtensionsClientInputsToJSON };
