'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SignInProviderEnum = require('./SignInProviderEnum.cjs');
var SocialSignInProvider = require('./SocialSignInProvider.cjs');

/* tslint:disable */
function ProjectSettingsSdkSocialSignInFromJSON(json) {
    return ProjectSettingsSdkSocialSignInFromJSONTyped(json);
}
function ProjectSettingsSdkSocialSignInFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signInProvider': !runtime.exists(json, 'signInProvider') ? undefined : SignInProviderEnum.SignInProviderEnumFromJSON(json['signInProvider']),
        'providers': !runtime.exists(json, 'providers') ? undefined : (json['providers'].map(SocialSignInProvider.SocialSignInProviderFromJSON)),
    };
}
function ProjectSettingsSdkSocialSignInToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signInProvider': SignInProviderEnum.SignInProviderEnumToJSON(value.signInProvider),
        'providers': value.providers === undefined ? undefined : (value.providers.map(SocialSignInProvider.SocialSignInProviderToJSON)),
    };
}

exports.ProjectSettingsSdkSocialSignInFromJSON = ProjectSettingsSdkSocialSignInFromJSON;
exports.ProjectSettingsSdkSocialSignInFromJSONTyped = ProjectSettingsSdkSocialSignInFromJSONTyped;
exports.ProjectSettingsSdkSocialSignInToJSON = ProjectSettingsSdkSocialSignInToJSON;
