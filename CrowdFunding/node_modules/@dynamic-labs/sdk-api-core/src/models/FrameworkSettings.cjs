'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var NextJsSettings = require('./NextJsSettings.cjs');
var ReactSettings = require('./ReactSettings.cjs');

/* tslint:disable */
function FrameworkSettingsFromJSON(json) {
    return FrameworkSettingsFromJSONTyped(json);
}
function FrameworkSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'react': !runtime.exists(json, 'react') ? undefined : ReactSettings.ReactSettingsFromJSON(json['react']),
        'nextjs': !runtime.exists(json, 'nextjs') ? undefined : NextJsSettings.NextJsSettingsFromJSON(json['nextjs']),
    };
}
function FrameworkSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'react': ReactSettings.ReactSettingsToJSON(value.react),
        'nextjs': NextJsSettings.NextJsSettingsToJSON(value.nextjs),
    };
}

exports.FrameworkSettingsFromJSON = FrameworkSettingsFromJSON;
exports.FrameworkSettingsFromJSONTyped = FrameworkSettingsFromJSONTyped;
exports.FrameworkSettingsToJSON = FrameworkSettingsToJSON;
