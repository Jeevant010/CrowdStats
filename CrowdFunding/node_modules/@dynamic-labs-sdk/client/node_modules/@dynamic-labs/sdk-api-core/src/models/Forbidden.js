import { exists } from '../runtime.js';

/* tslint:disable */
function ForbiddenFromJSON(json) {
    return ForbiddenFromJSONTyped(json);
}
function ForbiddenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}
function ForbiddenToJSON(value) {
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

export { ForbiddenFromJSON, ForbiddenFromJSONTyped, ForbiddenToJSON };
