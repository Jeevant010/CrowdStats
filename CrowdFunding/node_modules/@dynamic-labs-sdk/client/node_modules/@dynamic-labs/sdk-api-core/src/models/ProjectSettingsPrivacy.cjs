'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsPrivacyFromJSON(json) {
    return ProjectSettingsPrivacyFromJSONTyped(json);
}
function ProjectSettingsPrivacyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'collectIp': !runtime.exists(json, 'collectIp') ? undefined : json['collectIp'],
    };
}
function ProjectSettingsPrivacyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'collectIp': value.collectIp,
    };
}

exports.ProjectSettingsPrivacyFromJSON = ProjectSettingsPrivacyFromJSON;
exports.ProjectSettingsPrivacyFromJSONTyped = ProjectSettingsPrivacyFromJSONTyped;
exports.ProjectSettingsPrivacyToJSON = ProjectSettingsPrivacyToJSON;
