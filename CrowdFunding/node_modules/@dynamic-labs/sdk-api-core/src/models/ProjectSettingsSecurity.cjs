'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AuthSettings = require('./AuthSettings.cjs');
var Duration = require('./Duration.cjs');
var ExternalAuth = require('./ExternalAuth.cjs');
var HCaptchaSettings = require('./HCaptchaSettings.cjs');
var MFASettings = require('./MFASettings.cjs');

/* tslint:disable */
function ProjectSettingsSecurityFromJSON(json) {
    return ProjectSettingsSecurityFromJSONTyped(json);
}
function ProjectSettingsSecurityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwtDuration': !runtime.exists(json, 'jwtDuration') ? undefined : Duration.DurationFromJSON(json['jwtDuration']),
        'hCaptcha': !runtime.exists(json, 'hCaptcha') ? undefined : HCaptchaSettings.HCaptchaSettingsFromJSON(json['hCaptcha']),
        'mfa': !runtime.exists(json, 'mfa') ? undefined : MFASettings.MFASettingsFromJSON(json['mfa']),
        'auth': !runtime.exists(json, 'auth') ? undefined : AuthSettings.AuthSettingsFromJSON(json['auth']),
        'externalAuth': !runtime.exists(json, 'externalAuth') ? undefined : ExternalAuth.ExternalAuthFromJSON(json['externalAuth']),
    };
}
function ProjectSettingsSecurityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jwtDuration': Duration.DurationToJSON(value.jwtDuration),
        'hCaptcha': HCaptchaSettings.HCaptchaSettingsToJSON(value.hCaptcha),
        'mfa': MFASettings.MFASettingsToJSON(value.mfa),
        'auth': AuthSettings.AuthSettingsToJSON(value.auth),
        'externalAuth': ExternalAuth.ExternalAuthToJSON(value.externalAuth),
    };
}

exports.ProjectSettingsSecurityFromJSON = ProjectSettingsSecurityFromJSON;
exports.ProjectSettingsSecurityFromJSONTyped = ProjectSettingsSecurityFromJSONTyped;
exports.ProjectSettingsSecurityToJSON = ProjectSettingsSecurityToJSON;
