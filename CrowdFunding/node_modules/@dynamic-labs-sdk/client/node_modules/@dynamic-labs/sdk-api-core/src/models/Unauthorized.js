import { exists } from '../runtime.js';

/* tslint:disable */
function UnauthorizedFromJSON(json) {
    return UnauthorizedFromJSONTyped(json);
}
function UnauthorizedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}
function UnauthorizedToJSON(value) {
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

export { UnauthorizedFromJSON, UnauthorizedFromJSONTyped, UnauthorizedToJSON };
