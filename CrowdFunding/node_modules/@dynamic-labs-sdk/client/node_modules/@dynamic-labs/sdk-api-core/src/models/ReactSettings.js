import { exists } from '../runtime.js';

/* tslint:disable */
function ReactSettingsFromJSON(json) {
    return ReactSettingsFromJSONTyped(json);
}
function ReactSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}
function ReactSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
    };
}

export { ReactSettingsFromJSON, ReactSettingsFromJSONTyped, ReactSettingsToJSON };
