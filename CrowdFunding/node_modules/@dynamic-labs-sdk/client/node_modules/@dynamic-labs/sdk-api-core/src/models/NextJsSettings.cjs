'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function NextJsSettingsFromJSON(json) {
    return NextJsSettingsFromJSONTyped(json);
}
function NextJsSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': !runtime.exists(json, 'version') ? undefined : json['version'],
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

exports.NextJsSettingsFromJSON = NextJsSettingsFromJSON;
exports.NextJsSettingsFromJSONTyped = NextJsSettingsFromJSONTyped;
exports.NextJsSettingsToJSON = NextJsSettingsToJSON;
