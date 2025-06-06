import { exists } from '../runtime.js';

/* tslint:disable */
function UpdateUserPasskeyRequestFromJSON(json) {
    return UpdateUserPasskeyRequestFromJSONTyped(json);
}
function UpdateUserPasskeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
    };
}
function UpdateUserPasskeyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'alias': value.alias,
    };
}

export { UpdateUserPasskeyRequestFromJSON, UpdateUserPasskeyRequestFromJSONTyped, UpdateUserPasskeyRequestToJSON };
