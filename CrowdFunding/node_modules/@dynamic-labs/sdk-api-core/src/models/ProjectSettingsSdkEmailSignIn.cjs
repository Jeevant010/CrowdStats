'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SignInProviderEnum = require('./SignInProviderEnum.cjs');

/* tslint:disable */
function ProjectSettingsSdkEmailSignInFromJSON(json) {
    return ProjectSettingsSdkEmailSignInFromJSONTyped(json);
}
function ProjectSettingsSdkEmailSignInFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signInProvider': !runtime.exists(json, 'signInProvider') ? undefined : SignInProviderEnum.SignInProviderEnumFromJSON(json['signInProvider']),
    };
}
function ProjectSettingsSdkEmailSignInToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signInProvider': SignInProviderEnum.SignInProviderEnumToJSON(value.signInProvider),
    };
}

exports.ProjectSettingsSdkEmailSignInFromJSON = ProjectSettingsSdkEmailSignInFromJSON;
exports.ProjectSettingsSdkEmailSignInFromJSONTyped = ProjectSettingsSdkEmailSignInFromJSONTyped;
exports.ProjectSettingsSdkEmailSignInToJSON = ProjectSettingsSdkEmailSignInToJSON;
