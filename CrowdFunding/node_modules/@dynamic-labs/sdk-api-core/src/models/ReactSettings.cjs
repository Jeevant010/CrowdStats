'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ReactSettingsFromJSON(json) {
    return ReactSettingsFromJSONTyped(json);
}
function ReactSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': !runtime.exists(json, 'version') ? undefined : json['version'],
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

exports.ReactSettingsFromJSON = ReactSettingsFromJSON;
exports.ReactSettingsFromJSONTyped = ReactSettingsFromJSONTyped;
exports.ReactSettingsToJSON = ReactSettingsToJSON;
