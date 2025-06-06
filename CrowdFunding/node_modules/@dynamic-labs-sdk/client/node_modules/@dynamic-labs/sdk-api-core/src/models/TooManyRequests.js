import { exists } from '../runtime.js';

/* tslint:disable */
function TooManyRequestsFromJSON(json) {
    return TooManyRequestsFromJSONTyped(json);
}
function TooManyRequestsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}
function TooManyRequestsToJSON(value) {
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

export { TooManyRequestsFromJSON, TooManyRequestsFromJSONTyped, TooManyRequestsToJSON };
