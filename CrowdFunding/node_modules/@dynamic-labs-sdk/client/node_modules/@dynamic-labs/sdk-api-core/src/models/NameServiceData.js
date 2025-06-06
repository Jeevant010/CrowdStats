import { exists } from '../runtime.js';

/* tslint:disable */
function NameServiceDataFromJSON(json) {
    return NameServiceDataFromJSONTyped(json);
}
function NameServiceDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}
function NameServiceDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'avatar': value.avatar,
        'name': value.name,
    };
}

export { NameServiceDataFromJSON, NameServiceDataFromJSONTyped, NameServiceDataToJSON };
