import { exists } from '../runtime.js';

/* tslint:disable */
function InternalServerErrorFromJSON(json) {
    return InternalServerErrorFromJSONTyped(json);
}
function InternalServerErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}
function InternalServerErrorToJSON(value) {
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

export { InternalServerErrorFromJSON, InternalServerErrorFromJSONTyped, InternalServerErrorToJSON };
