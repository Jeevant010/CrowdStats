import { exists } from '../runtime.js';

/* tslint:disable */
function NameServiceFromJSON(json) {
    return NameServiceFromJSONTyped(json);
}
function NameServiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'registry': !exists(json, 'registry') ? undefined : json['registry'],
    };
}
function NameServiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'registry': value.registry,
    };
}

export { NameServiceFromJSON, NameServiceFromJSONTyped, NameServiceToJSON };
