import { exists } from '../runtime.js';

/* tslint:disable */
function NextJsSettingsFromJSON(json) {
    return NextJsSettingsFromJSONTyped(json);
}
function NextJsSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}
function NextJsSettingsToJSON(value) {
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

export { NextJsSettingsFromJSON, NextJsSettingsFromJSONTyped, NextJsSettingsToJSON };
