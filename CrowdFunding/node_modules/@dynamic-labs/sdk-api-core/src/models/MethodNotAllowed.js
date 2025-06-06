import { exists } from '../runtime.js';

/* tslint:disable */
function MethodNotAllowedFromJSON(json) {
    return MethodNotAllowedFromJSONTyped(json);
}
function MethodNotAllowedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}
function MethodNotAllowedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
    };
}

export { MethodNotAllowedFromJSON, MethodNotAllowedFromJSONTyped, MethodNotAllowedToJSON };
