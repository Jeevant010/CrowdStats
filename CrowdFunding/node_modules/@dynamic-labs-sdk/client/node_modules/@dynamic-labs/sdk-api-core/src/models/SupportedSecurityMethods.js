import { exists } from '../runtime.js';
import { SupportedSecurityMethodFromJSON, SupportedSecurityMethodToJSON } from './SupportedSecurityMethod.js';

/* tslint:disable */
function SupportedSecurityMethodsFromJSON(json) {
    return SupportedSecurityMethodsFromJSONTyped(json);
}
function SupportedSecurityMethodsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'passkey': !exists(json, 'passkey') ? undefined : SupportedSecurityMethodFromJSON(json['passkey']),
        'email': !exists(json, 'email') ? undefined : SupportedSecurityMethodFromJSON(json['email']),
        'password': !exists(json, 'password') ? undefined : SupportedSecurityMethodFromJSON(json['password']),
    };
}
function SupportedSecurityMethodsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'passkey': SupportedSecurityMethodToJSON(value.passkey),
        'email': SupportedSecurityMethodToJSON(value.email),
        'password': SupportedSecurityMethodToJSON(value.password),
    };
}

export { SupportedSecurityMethodsFromJSON, SupportedSecurityMethodsFromJSONTyped, SupportedSecurityMethodsToJSON };
