import { exists } from '../runtime.js';

/* tslint:disable */
function BadRequestFromJSON(json) {
    return BadRequestFromJSONTyped(json);
}
function BadRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}
function BadRequestToJSON(value) {
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

export { BadRequestFromJSON, BadRequestFromJSONTyped, BadRequestToJSON };
