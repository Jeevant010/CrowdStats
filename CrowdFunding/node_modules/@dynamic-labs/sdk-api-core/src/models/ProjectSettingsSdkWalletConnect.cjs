'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsSdkWalletConnectFromJSON(json) {
    return ProjectSettingsSdkWalletConnectFromJSONTyped(json);
}
function ProjectSettingsSdkWalletConnectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'projectId': !runtime.exists(json, 'projectId') ? undefined : json['projectId'],
        'v2Enabled': !runtime.exists(json, 'v2Enabled') ? undefined : json['v2Enabled'],
        'walletProjectId': !runtime.exists(json, 'walletProjectId') ? undefined : json['walletProjectId'],
    };
}
function ProjectSettingsSdkWalletConnectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'projectId': value.projectId,
        'v2Enabled': value.v2Enabled,
        'walletProjectId': value.walletProjectId,
    };
}

exports.ProjectSettingsSdkWalletConnectFromJSON = ProjectSettingsSdkWalletConnectFromJSON;
exports.ProjectSettingsSdkWalletConnectFromJSONTyped = ProjectSettingsSdkWalletConnectFromJSONTyped;
exports.ProjectSettingsSdkWalletConnectToJSON = ProjectSettingsSdkWalletConnectToJSON;
